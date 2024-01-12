"use client";
import useMenuBarCustomizeAtom from "@/core/hooks/useMenuBarCustomizeAtom";
import NormalModeMenuBar from "./normal-mode-menu-bar";
import DeleteModeMenuBar from "./delete-mode-menu-bar";

const MenuBar = () => {
  const { menuBarCustomize } = useMenuBarCustomizeAtom();

  if (menuBarCustomize.mode === "delete-mode") return <DeleteModeMenuBar />;

  return <NormalModeMenuBar />;
};

export default MenuBar;
