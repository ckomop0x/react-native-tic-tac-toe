import { PropsWithChildren } from "react";
import { ViewStyle } from "react-native";

export type LayoutProps = PropsWithChildren<{
  gap?: number;
  styles?: ViewStyle;
}>
