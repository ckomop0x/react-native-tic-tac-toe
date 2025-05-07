import { memo } from "react";
import { LayoutProps } from "./Layout";
import { View } from "react-native";

export const Row = memo(({gap, styles, children}: LayoutProps) => {
  return (
    <View style={[{display: "flex", flexDirection: "row", gap}, styles]}>{children}</View>
  );
});

