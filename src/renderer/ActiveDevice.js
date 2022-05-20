// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2018-2022  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import Focus from "@api/focus";
import { truncate } from "original-fs";

export function ActiveDevice() {
  this.port = undefined;
  this.connected = false;
  this.commands = undefined;
  this.focusConnection = undefined;

  this.availableFocusCommands = undefined;

  this.focus = new Focus();

  this.focusCommands = async () => {
    if (this.commands === undefined) {
      this._probeFocusCommands();
    }
    return this.commands;
  };
  this._probeFocusCommands = () => {
    try {
      this.commands = this.focus.probe();
    } catch (e) {
      this.commands = [];
    }
  };

  this.focusDetected = async () => {
    if (this.hasCustomizableKeymaps() || this.hasCustomizableLEDMaps()) {
      return true;
    } else {
      return false;
    }
  };
  this.hasCustomizableKeymaps = async () => {
    this.focusCommands().then((commands) => {
      if (
        commands.includes("keymap.custom") > 0 ||
        commands.includes("keymap.map") > 0
      ) {
        return true;
      } else {
        return false;
      }
    });
  };

  this.hasCustomizableLEDMaps = () => {
    this.focusCommands().then((commands) => {
      if (
        commands.includes("colormap.map") > 0 &&
        commands.includes("palette") > 0
      ) {
        console.log("it has customizable LED maps");
        console.log(commands);
        return true;
      } else {
        return false;
      }
    });
  };
}
