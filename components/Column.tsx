import { memo } from "react";
import { LayoutProps } from "./Layout";
import { View } from "react-native";

export const Column = memo(({gap, styles, children}: LayoutProps) => {
  return (
    <View style={[{display: "flex", flexDirection: "column", gap}, styles]}>{children}</View>
  );
});
