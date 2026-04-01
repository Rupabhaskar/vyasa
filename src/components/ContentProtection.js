"use client";

import { useEffect } from "react";

const isFormField = (target) => {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
};

export default function ContentProtection() {
  useEffect(() => {
    const preventContextMenu = (e) => {
      if (!isFormField(e.target)) e.preventDefault();
    };

    const preventCopyCut = (e) => {
      if (!isFormField(e.target)) e.preventDefault();
    };

    const preventSelect = (e) => {
      if (!isFormField(e.target)) e.preventDefault();
    };

    const preventDrag = (e) => {
      if (!isFormField(e.target)) e.preventDefault();
    };

    const preventShortcuts = (e) => {
      if (isFormField(e.target)) return;

      const key = e.key.toLowerCase();
      const hasCmd = e.ctrlKey || e.metaKey;
      const blockCombo =
        (hasCmd && ["c", "x", "s", "u", "p", "a"].includes(key)) ||
        (hasCmd && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12";

      if (blockCombo) e.preventDefault();
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("copy", preventCopyCut);
    document.addEventListener("cut", preventCopyCut);
    document.addEventListener("selectstart", preventSelect);
    document.addEventListener("dragstart", preventDrag);
    document.addEventListener("keydown", preventShortcuts);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("copy", preventCopyCut);
      document.removeEventListener("cut", preventCopyCut);
      document.removeEventListener("selectstart", preventSelect);
      document.removeEventListener("dragstart", preventDrag);
      document.removeEventListener("keydown", preventShortcuts);
    };
  }, []);

  return null;
}
