import { useEffect, useRef } from "react";
import { Terminal as XTerm } from "xterm";
import { FitAddon } from "@xterm/addon-fit";
import "xterm/css/xterm.css";

import { runCommand } from "./commands";

const PROMPT =
  "\x1b[32muser\x1b[32m@" +
  "\x1b[32minteractive-cv\x1b[0m " +
  "\x1b[37m$\x1b[0m ";

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const term = new XTerm({
      cursorBlink: true,
      convertEol: true,
      fontFamily: "Ubuntu Mono, monospace",
      fontSize: 14,
      scrollback: 1000
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    term.open(terminalRef.current);
    term.write("Welcome!\n");
    term.write("Use 'help' to get started.\n");
    fitAddon.fit();

    let buffer = "";

    const printPrompt = () => {
      term.write(PROMPT);
    };

    printPrompt();

    term.onKey(({ key, domEvent }) => {
      const { keyCode } = domEvent;

      if (keyCode === 13) {
        const output = runCommand(buffer);
        term.write("\r\n");

        if (output === "__CLEAR__") {
          term.clear();
        } else {
          term.write(output);
        }

        buffer = "";
        term.write("\r\n");
        printPrompt();
        return;
      }

      if (keyCode === 8) {
        if (buffer.length > 0) {
          buffer = buffer.slice(0, -1);
          term.write("\b \b");
        }
        return;
      }

      if (key.length === 1 && !domEvent.ctrlKey && !domEvent.metaKey) {
        buffer += key;
        term.write(key);
      }
    });

    const resize = () => fitAddon.fit();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      term.dispose();
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111"
      }}
    />
  );
}
