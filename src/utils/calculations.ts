import type { PositionInput, CalculatedValues, ValidationResult } from '@/types'

const MAINTENANCE_MARGIN_RATE = 0.005 // 0.5%
const MAX_LEVERAGE = 20

/**
 * Calculate position values based on input
 */
export function calculatePosition(input: PositionInput): CalculatedValues {
  const { entryPrice, size, leverage, side } = input

  const notionalValue = entryPrice * size
  const requiredMargin = notionalValue / leverage
  const maintenanceMargin = notionalValue * MAINTENANCE_MARGIN_RATE

  // Liquidation price depends on position side
  const liquidationPrice =
    side === 'long'
      ? entryPrice * (1 - 1 / leverage + MAINTENANCE_MARGIN_RATE)
      : entryPrice * (1 + 1 / leverage - MAINTENANCE_MARGIN_RATE)

  return {
    notionalValue,
    requiredMargin,
    maintenanceMargin,
    liquidationPrice,
  }
}

/**
 * Validate position input
 */
export function validatePosition(
  input: PositionInput,
  calculated: CalculatedValues
): ValidationResult {
  const errors: string[] = []

  // Check all fields are filled and positive
  if (!input.entryPrice || input.entryPrice <= 0) {
    errors.push('Entry price must be greater than 0')
  }
  if (!input.size || input.size <= 0) {
    errors.push('Size must be greater than 0')
  }
  if (!input.leverage || input.leverage <= 0) {
    errors.push('Leverage must be greater than 0')
  }

  // Check leverage limit
  if (input.leverage > MAX_LEVERAGE) {
    errors.push(`Leverage cannot exceed ${MAX_LEVERAGE}x`)
  }

  // Check margin requirements
  if (calculated.requiredMargin <= calculated.maintenanceMargin) {
    errors.push('Required margin must be greater than maintenance margin')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
