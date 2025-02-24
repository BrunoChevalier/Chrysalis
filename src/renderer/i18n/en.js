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

const English = {
  language: "English",
  errors: {
    deviceDisconnected: "Keyboard disconnected",
    saveFile: "Error saving a file: {{ error }}",
  },
  components: {
    layer: "Layer {{index}}",
    layerRaw: "Layer",
    none: "None",
    type: "Type",
    save: {
      success: "Saved!",
      saveChanges: "Save Changes",
    },
    pickerColorButton: "Change color",
    loading: "Reading data from device...",
    logo: {
      altText: "Chrysalis logo",
    },
  },
  dialog: {
    ok: "Ok",
    cancel: "Cancel",
    close: "Close",
  },
  app: {
    menu: {
      "focus-not-detected": "Welcome",
      systemInfo: "Report a problem",
      editor: "Layout & Colormap Editor",
      layoutEditor: "Layout Editor",
      colormapEditor: "Colormap Editor",
      macroEditor: "Macro Editor",
      firmwareUpdate: "Firmware Update",
      keyboardSettings: "Keyboard Settings",
      preferences: "Preferences",
      selectAKeyboard: "Select a keyboard",
      layoutCard: "Layout Card",
      selectAnotherKeyboard: "Select another keyboard",
      chat: "Discord chat",
      feedback: "Send feedback",
      exit: "Exit",
      keyboardSection: "Keyboard",
      chrysalisSection: "Chrysalis",
      miscSection: "Miscellaneous",
      upgradeAvailable: "An upgrade is available!",
      changelog: "Changelog",
    },
    deviceMenu: {
      Homepage: "Homepage",
      Forum: "Forum",
      Chat: "Chat",
    },
    cancelPending: {
      title: "Discard pending changes?",
      content: "You have unsaved changes. If you proceed, they will be lost.",
    },
    actionRequired: "Action required",
  },
  changelog: {
    title: "Changelog",
  },
  editor: {
    keyType: "Key type",
    keyCode: "Key code",
    legacy: {
      migrate: "Migrate",
      warning: `We found legacy keys on the keymap that are no longer valid. To migrate to the new codes, please press the Migrate button.`,
    },
    sharing: {
      title: "Backup & Restore",
      loadFromLibrary: "Load from library",
      loadFromBackup: "Load from backups",
      loadFromFile: "Load from file...",
      exportToFile: "Export to file...",
      import: "Import",
      selectLoadFile: "Select file to load a layout from",
      selectExportFile: "Select file to export the layout to",
      dialog: {
        layoutFiles: "Layout files",
        allFiles: "All files",
      },
      errors: {
        unableToLoad: "Unable to load layout from the selected file.",
        parseFail: "Failed to parse layout data.",
        invalidLayoutData: "File did not contain valid layout data.",
        saveFail: "Error while saving the exported layout.",
      },
      importConfirm: {
        title: "Import the selected layout?",
        contents: `This will overwrite your current layout, and any unsaved changes will be lost. Are you sure you want to continue?`,
      },
    },
    sidebar: {
      custom: {
        title: "Custom key code",
        help: `Lets you assign a custom key code to a key, or a code not currently known to Chrysalis.`,
        label: "Custom key code",
      },
      blanks: {
        title: "Blanks",
        help: "Blocked & transparent keys.",
      },
      overview: {
        key: "Key #{{index}}",
        color: "Color",
        hideEmptyLayers: "Hide empty layers...",
        showEmptyLayers: "Show empty layers...",
        sharing: "Backup & Restore",
        help: `An overview of the mappings for the currently selected key. To change the shown layer, click on its row.`,
      },
      secondary: {
        title: "Secondary action",
        help: `Lets you assign secondary functionality to a key. When tapping these augmented keys, you'll get the primary function. When holding them, the secondary action will be performed.`,
        whenHeld: "When held",
        type: {
          none: "No secondary action",
          layer: "Layer shift",
          modifier: "Modifier",
        },
        targetLayer: "Layer",
        modifier: "Modifier",
      },
      colors: {
        title: "Colors",
        help: `Assign colors by selecting one from the palette and clicking on a key. To change the color of a palette entry, use the color picker.`,
      },
      consumer: {
        title: "Consumer control",
        help: "Keys to control volume, brightness, and media controls.",
        volume: "Volume",
        media: "Media control",
        brightness: "Brightness",
      },
      keypicker: {
        title: "Standard keys",
        pickAKey: "Pick a key",
        help: `Letters, number, symbols, and modifiers - the keys you find on a standard keyboard layout.`,
        mods: "Modifiers",
        modsHelp: `Choose modifier keys that are automatically pressed as you press this key.`,
        oneshot: {
          label: "Sticky",
          tooltip: `Tap to activate for next keypress, hold to act like a regular modifier, double tap to toggle modifier.`,
        },
      },
      layer: {
        title: "Layers and keymaps",
        help: "Keys that let you change layers.",
      },
      leader: {
        title: "Leader",
        help: `Assign Leader keys. To configure this feature, you can use the Arduino IDE to customize the Kaleidoscope 'Sketch' file for your keyboard.`,
      },
      oneshot: {
        title: "One-shot",
        help: `Click button below to choose a dedicated key to cancel one-shot keys.`,
      },
      ledcontrol: {
        title: "LED control",
        help: "Control your keyboard's LED themes and effects.",
      },
      macros: {
        title: "Macros",
        help: `Assign macros to keys. To create or modify macros, you can use the Arduino IDE to customize the Kaleidoscope 'Sketch' file for your keyboard.`,
      },
      dynmacros: {
        title: "Dynamic Macros",
        help: `Assign and edit dynamic macros to keys.`,
        usage_overview: {
          label: "Macro space used:",
          usage: "{{ used }}/{{ size }}",
          bytes: "bytes",
        },
      },
      mousekeys: {
        title: "Mouse control",
        help: `Emulate a mouse using your keyboard's keys.`,
        movement: "Movement",
        buttons: "Buttons",
        wheel: "Wheel",
        warp: "Warp",
      },
      spacecadet: {
        title: "SpaceCadet",
        help: `SpaceCadet turns your left and right shift keys into your left and right parens, when tapped without also tapping any other keys. Using the Arduino IDE, you can add additional SpaceCadet mappings.`,
      },
      steno: {
        title: "Steno",
        help: `Your keyboard supports the GeminiPR protocol for Stenographic input. Using these keys instead of Plover's QWERTY input offer a more seamless Steno experience.`,
      },
      tapdance: {
        title: "TapDance",
        help: `Tap-dance keys are general purpose, multi-use keys, which trigger a different action based on the number of times you tap them.`,
      },
    },
    layerswitch: {
      type: "Type",
      shiftTo: "Shift To Layer",
      lockTo: "Lock To Layer",
      moveTo: "Move To Layer",
      oneshot: "Layer shift for next action",
      target: "Layer",
      dualuse: "Layer shift when held",
    },
    clearLayer: "Clear layer...",
    clearLayerQuestion: "Clear layer?",
    clearLayerPrompt: "This will reset the layer to its default state.",
    copyFrom: "Copy from layer...",
    pleaseSelectLayer: "Please select a layer...",
    dualUse: "Modifier when held, normal key otherwise",
    dualUseLayer: "Layer shift when held, normal key otherwise",
    layoutMode: "Edit the keyboard layout",
    colormapMode: "Edit the colormap",
    importExport: "Import/Export the current layer",
    importExportDescription:
      "The data below can be freely edited, or copied elsewhere to be pasted back for importing. This is the internal representation of Chrysalis state, handle with care.",
    loadDefault: "Load a default:",
    loadDefaultSuccess: "Default loaded!",
    copyToClipboard: "Copy to clipboard",
    copySuccess: "Copied!",
    pasteFromClipboard: "Paste from clipboard",
    pasteSuccess: "Pasted!",
    onlyCustom: {
      warning: `Chrysalis no longer supports configurations containing a mix of hardcoded and EEPROM layers. If this is a feature you need, we'd love to hear more about your use case. In most cases, however, we would advise switching to custom layers only, which Chrysalis can do for you. When doing the switch, hardcoded layers will not be used, and the default layer set - if any - will be layer zero.`,
      fixItButton: "Switch to custom layers only",
      openFR: "Open a feature request",
    },
    macros: {
      title: "Macro #{{ index }}",
      edit: "Edit macro",
      out_of_space: `Dynamic macros are using too much space, please free up {{ overflow }} bytes.`,
      test: {
        button: "Test",
        placeholder: "Click 'Test', and the macro will play out here.",
      },
      steps: {
        time_ms: "{{ value }}ms",
        in_ms: "ms",
        unknown: "<unknown>",
        INTERVAL: "Delay between steps",
        WAIT: "Wait",
        KEYDOWN: "Hold key",
        KEYUP: "Release key",
        TAP: "Tap",
        EXPLICIT_REPORT: "Do not send a report between steps",
        IMPLICIT_REPORT: "Send a report between steps",
        SEND_REPORT: "Send a report now",
        unsupported: "Unsupported",
      },
    },
  },
  preferences: {
    interface: "User Interface",
    advanced: "Advanced",
    verboseFocus: "Verbose logging",
    devtools: {
      main: {
        label: "Developer tools",
        description: `These preferences primarily aid developers. You may be asked to turn them on, to collect more information about an issue.`,
      },
      verboseLogging: {
        label: "Enable verbose logging",
        help: "Turns on a fair amount of extra logging, useful for debugging only.",
      },
      console: {
        label: "Open the developer console",
        help: "The developer console lets you peek inside Chrysalis. Use with care.",
      },
    },
    ui: {
      layoutEditor: {
        label: "Customize the Layout Editor",
      },
      layoutCards: {
        label: "Customize Layout Cards",
      },
      hideUnavailableFeatures: {
        label: `Hide features not supported by your keyboard's current firmware`,
        help: `When enabled, Chrysalis will hide configuration options for features that your keyboard's firmware doesn't support.`,
      },
      lookNFeel: {
        label: "Customize appearance",
      },
      theme: {
        label: "Overall appearance",
        system: "System default",
        dark: "Dark",
        light: "Light",
      },
      language: {
        label: "Language",
        help: "Choose the language Chrysalis should use",
      },
      coloredLayoutCards: {
        label: "Enable colors on the layout cards",
        help: `When enabled, the layout cards will show not only key labels, but if available, colors too.`,
      },
      host: {
        label: "Keyboard layout",
        help: "Select the key layout you use on your computer",
      },
    },
    keyboard: {
      title: "My Keyboard",
      advanced: {
        label: "Advanced Tools & Preferences",
        description: `These are dangerous tools, please make sure you know what they do before using any of them.`,
      },
      layers: {
        label: "Layer preferences",
      },
      defaultLayer: {
        label: "Default layer",
        noDefault: "No default",
        help: `The default layer the keyboard will start up with.`,
      },
      factoryReset: {
        button: "Reset EEPROM to factory defaults",
        dialog: {
          title: "Reset EEPROM to factory defaults?",
          contents: `This will reset the EEPROM to factory defaults. You will lose all customizations made.`,
        },
      },
      flash: {
        preferExternal: {
          label: "Use an external program for flashing",
        },
      },
      led: {
        label: "LED preferences",
        idle: {
          label: "Idle time before LEDs turn off",
          help: `Unless disabled, LEDs will turn off after a configured amount of time.`,
          disabled: "Disabled",
          oneMinute: "1 minute",
          twoMinutes: "2 minutes",
          threeMinutes: "3 minutes",
          fourMinutes: "4 minutes",
          fiveMinutes: "5 minutes",
          tenMinutes: "10 minutes",
          fifteenMinutes: "15 minutes",
          twentyMinutes: "20 minutes",
          thirtyMinutes: "30 minutes",
          sixtyMinutes: "60 minutes",
        },
        brightness: {
          label: "LED Brightness",
          help: "Adjust the brightness of the LEDs on the keyboard.",
        },
        default: {
          autoSave: {
            label: "Enable automatically saving the default led mode",
            help: `When enabled, whenever the led mode is changed, it gets saved as the default.`,
          },
          label: "Default led mode",
          help: "Select the led mode the keyboard should start up with.",
        },
      },
      plugins: {
        label: "Plugin preferences",
        escOneShot: {
          label: `Let Escape cancel one-shot keys`,
          help: `When enabled, "Escape" will cancel one-shot keys, otherwise a dedicated cancel key can do so.`,
        },
      },
    },
  },
  keyboardSelect: {
    unknown: "Unknown",
    selectPrompt: "Please select a keyboard:",
    noDevices: `No keyboards found.`,
    connect: "Connect",
    disconnect: "Disconnect",
    scan: "Scan",
    installUdevRules: "Fix it",
    permissionError: `Your computer won't let Chrysalis talk to your keyboard. (You do not have read/write permissions to {{path}}.)`,
    permissionErrorSuggestion: `Chrysalis can fix this by installing a udev rules file into /etc/udev/rules.d/.`,
  },
  firmwareUpdate: {
    calloutTitle: "Important!",
    dialog: {
      selectFirmware: "Select a firmware",
      firmwareFiles: "Firmware files",
      allFiles: "All files",
    },
    options: {
      onFlash: "Restore to factory defaults when flashing",
      title: "Firmware update options",
    },
    flashing: {
      error: "Error flashing the firmware",
      releasePROG: `Bootloader detected. If you're holding a key down, please release it.`,
      troubleshooting: "Troubleshooting",
      success: "Firmware flashed successfully!",
      button: "Update",
      buttonSuccess: "Updated!",
      steps: {
        factoryRestore: "Restoring factory defaults",
        bootloaderTrigger: "Triggering bootloader",
        bootloaderWait: "Waiting for bootloader",
        saveEEPROM: "Saving EEPROM contents",
        restoreEEPROM: "Restoring EEPROM contents",
        reconnect: "Reconnecting",
        flash: "Flashing",
        reboot: "Rebooting",
      },
    },
    confirmDialog: {
      title: "Replace the firmware and reset to factory defaults?",
      contents: `This will replace the firmware on the device, and reset all settings to factory defaults. You will lose all customizations made.`,
    },
    defaultFirmware: "Chrysalis {{version}} default",
    defaultFirmwareDescription: "Minimal, without bells and whistles",
    experimentalFirmware: "Chrysalis {{version}} experimental",
    experimentalFirmwareDescription: "Experimental, with more plugins enabled",
    selected: "Selected firmware",
    custom: "Custom firmware",
    description: `Updating or "flashing" your keyboard's firmware is how we teach it new tricks. Chrysalis will install a new version of your keyboard's firmware which includes support for customizing the key layout, as well as other features. If you've previously customized your keyboard's firmware, this will overwrite your custom firmware. You can always find the source code of the firmware Chrysalis is installing here:`,
    postUpload: `Once the upload is done, Chrysalis will take you back to the keyboard selection screen.`,
  },
  "focus-not-detected": {
    title: "Welcome to Chrysalis",
    contents: `Chrysalis recognizes your keyboard, but needs to update its firmware before you can continue.`,
    gotoUpdate: "Update Firmware",
    reconnect: "Reconnect",
    reconnectDescription: `There's a possibility that we misdetected the capabilities of the keyboard, or that the keyboard was starting up while we connected. In this case, you can try clicking the "{{buttonName}}" button to attempt a reconnect, and look for the necessary features again. Reconnecting is useful if you're sure there was a temporary failure upon previous attempts, and the problem has been resolved.`,
  },
  systeminfo: {
    title: "Report a problem",
    intro: `If you're having trouble with Chrysalis, the development team may ask you to send them some debugging information. Chrysalis can help you collect and package up everything you might need to share. This includes error logs, as well as a bit of information about this computer's operating system, connected devices, and Chrysalis itself. Keyboard information will include information about the keyboard's current firmware, as well as key layouts and LED configuration.`,
    bugTracker: `You can find a list of known issues (or report a bug) on GitHub`,
    privacyNote: `We try hard not to include private information in this bundle, but recommend you read through it before sharing it.`,
    createBundle: "Create Bundle",
    viewBundle: "View Bundle",
    saveBundle: "Save Bundle",
    dialog: {
      title: "Save Chrysalis Debug Bundle",
      bundleFiles: "Debug bundle files",
    },
    bundleSaved: `Chrysalis debug bundle saved.`,
  },
  devices: {
    Dygma: {
      Raise: {
        updateInstructions: `To update the firmware, the keyboard needs a special reset. When you see the light on the Neuron go off, press and hold the Escape key. The Neuron's light should start a blue pulsing pattern.`,
      },
    },
    "SOFT/HRUF": {
      Splitography: {
        updateInstructions: `After clicking the Update button, reset your keyboard (by pressing the small
reset button beside the USB port) to put it into programmable mode, within ten
seconds.`,
      },
    },
    Keyboardio: {
      Atreus: {
        updateInstructions: `Hold down the key in the bottom left corner of the keyboard (in the default layout, this key is the ESC key). Continue holding it down while you click the Update button.`,
      },
      Model01: {
        updateInstructions: `Hold down the key in the top left corner of the keyboard (in the default layout, this key is the PROG key). Continue holding it while you click the Update button. Once the keys start flashing red across the board, you can release the key.`,
      },
      Model100: {
        updateInstructions: `Hold down the key in the top left corner of the keyboard (in the default layout, this key is the PROG key). Continue holding it while you click the Update button. Once the keys start flashing green across the first column of the board, please release the key, as holding it too long may prevent flashing from succeeding.`,
      },
    },
    PJRC: {
      Teensy: {
        updateInstructions: `Since this is a Teensy-powered device in programmable mode already, Chrysalis has no way of detecting what kind of keyboard it is. Please select a custom firmware appropriate for your keyboard, and continue.`,
      },
    },
  },
};

export { English as default };
