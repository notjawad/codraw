"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="mr-2 flex max-w-[164px] flex-wrap items-center gap-2 border-r border-neutral-200 pr-2">
      <ColorButton color={{ r: 255, g: 192, b: 203 }} onClick={onChange} />
      <ColorButton color={{ r: 222, g: 210, b: 231 }} onClick={onChange} />
      <ColorButton color={{ r: 204, g: 255, b: 241 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 229, b: 180 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 222, b: 253 }} onClick={onChange} />
      <ColorButton color={{ r: 179, g: 209, b: 237 }} onClick={onChange} />
      <ColorButton color={{ r: 185, g: 236, b: 198 }} onClick={onChange} />
      <ColorButton color={{ r: 241, g: 245, b: 147 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
    </div>
  );
};

interface ColorButtonProps {
  color: Color;
  onClick: (color: Color) => void;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      onClick={() => onClick(color)}
      className="flex h-5 w-5 items-center justify-center transition hover:opacity-75"
    >
      <div
        className="h-5 w-5 rounded-full border border-neutral-300"
        style={{
          background: colorToCss(color),
        }}
      ></div>
    </button>
  );
};
