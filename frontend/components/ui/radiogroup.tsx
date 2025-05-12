"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"
import { Circle } from "lucide-react"

const RadioGroup = RadioGroupPrimitive.Root

const RadioGroupItem = ({ className, ...props }: RadioGroupPrimitive.RadioGroupItemProps) => (
  <RadioGroupPrimitive.Item
    className={cn(
      "h-4 w-4 rounded-full border border-gray-400 text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "data-[state=checked]:bg-primary data-[state=checked]:border-transparent",
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <Circle className="h-2.5 w-2.5 fill-current text-white" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
)

export { RadioGroup, RadioGroupItem }
