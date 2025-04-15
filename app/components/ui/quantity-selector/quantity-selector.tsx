import {Minus, Plus} from 'lucide-react';
import * as React from 'react';

import {Button} from '~/components/ui/button';
import {Icons} from '~/components/ui/icons';
import {cn} from '~/utils/helpers';

const ICON_SIZE = 16;

export const minusButton = {
  ariaLabel: 'Diminuir a quantidade',
  className: 'border-t border-b border-l rounded-r-none disabled:opacity-100',
};

export const plusButton = {
  ariaLabel: 'Aumentar a quantidade',
  className: 'border-t border-b border-r rounded-l-none disabled:opacity-100',
};

export interface QuantitySelectorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  iconSize?: number;
  initial?: number;
  isLoading?: boolean;
  itemId?: number | string;
  max?: number;
  min?: number;
  onChangeQuantity?: (value: number) => void;
  onValidateBlur?: (min: number, maxValue: number, quantity: number) => void;
  type?: 'button' | 'reset' | 'submit';
  unitMultiplier?: number;
  useUnitMultiplier?: boolean;
}

export const QuantitySelector = ({
  className,
  disabled = false,
  iconSize = ICON_SIZE,
  initial,
  isLoading,
  itemId = '0',
  max,
  min = 1,
  onChangeQuantity,
  onValidateBlur,
  type = 'button',
  unitMultiplier = 1,
  useUnitMultiplier,
  ...props
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = React.useState<number>(initial ?? min);
  const [multipliedUnit, setMultipliedUnit] = React.useState<number>(
    quantity * unitMultiplier,
  );

  function validateQuantityBounds(n: number): number {
    const maxValue = min ? Math.max(n, min) : n;

    return max
      ? Math.min(maxValue, useUnitMultiplier ? max * unitMultiplier : max)
      : maxValue;
  }

  const roundUpQuantityIfNeeded = (_quantity: number) => {
    if (!useUnitMultiplier) {
      return _quantity;
    }
    return Math.ceil(_quantity / unitMultiplier) * unitMultiplier;
  };

  const isLeftDisabled = quantity === min;
  const isRightDisabled = quantity === max;

  const changeQuantity = (increaseValue: number) => {
    const quantityValue = validateQuantityBounds(quantity + increaseValue);

    onChangeQuantity?.(quantityValue);
    setQuantity(quantityValue);
    setMultipliedUnit(quantityValue * unitMultiplier);
  };

  const increase = () => changeQuantity(1);

  const decrease = () => changeQuantity(-1);

  function validateBlur() {
    const quantityValue = validateQuantityBounds(quantity);
    const roundedQuantity = roundUpQuantityIfNeeded(quantityValue);

    const maxValue = max ?? (min ? Math.max(quantity, min) : quantity);
    const isOutOfBounds = quantity > maxValue || quantity < min;
    if (isOutOfBounds) {
      onValidateBlur?.(min, maxValue, roundedQuantity);
    }

    setQuantity(() => {
      setMultipliedUnit(roundedQuantity);
      onChangeQuantity?.(roundedQuantity / unitMultiplier);

      return roundedQuantity / unitMultiplier;
    });
  }

  React.useEffect(() => {
    if (initial) setQuantity(initial);
  }, [initial]);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.currentTarget.value));
  };

  return (
    <div className={cn('flex items-center', className)} {...props}>
      <Button
        aria-controls={`ProductQuantity_${itemId}`}
        ariaLabel={minusButton.ariaLabel}
        className={minusButton.className}
        disabled={isLeftDisabled || disabled || isLoading}
        onClick={decrease}
        size="icon"
        type={type}
        variant="ghost"
      >
        <Minus size={iconSize} />
      </Button>

      <label className="sr-only" htmlFor={`ProductQuantity_${itemId}`}>
        Quantidade de produto
      </label>

      {isLoading ? (
        <div className="flex size-6 items-center justify-center border">
          <Icons.Loaders.Ellipsis className="size-4" />
        </div>
      ) : (
        <input
          aria-label="Quantity"
          aria-readonly
          className="w-12 rounded-none text-center"
          disabled={disabled || isLoading}
          id={`ProductQuantity_${itemId}`}
          onBlur={validateBlur}
          onChange={changeInputValue}
          readOnly
          type="numeric"
          value={useUnitMultiplier ? multipliedUnit : quantity}
        />
      )}

      <Button
        aria-controls={`ProductQuantity_${itemId}`}
        ariaLabel={plusButton.ariaLabel}
        className={plusButton.className}
        disabled={isRightDisabled || disabled || isLoading}
        onClick={increase}
        size="icon"
        type={type}
        variant="ghost"
      >
        <Plus size={iconSize} />
      </Button>
    </div>
  );
};
