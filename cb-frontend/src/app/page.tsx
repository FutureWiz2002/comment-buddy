"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import data from "./theme.json";
import { NextApiRequest, NextApiResponse } from "next";


export default function Home() {
  const [currentCode, setCurrentCode] = useState("");
  const [returnedCode, setReturnedCode] = useState("");
  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme("nightowl", {
        base: "vs-dark",
        inherit: true,
        rules: [
          {
            background: "011627",
            token: "",
          },
          {
            foreground: "637777",
            token: "comment",
          },
          {
            foreground: "addb67",
            token: "string",
          },
          {
            foreground: "ecc48d",
            token: "vstring.quoted",
          },
          {
            foreground: "ecc48d",
            token: "variable.other.readwrite.js",
          },
          {
            foreground: "5ca7e4",
            token: "string.regexp",
          },
          {
            foreground: "5ca7e4",
            token: "string.regexp keyword.other",
          },
          {
            foreground: "5f7e97",
            token: "meta.function punctuation.separator.comma",
          },
          {
            foreground: "f78c6c",
            token: "constant.numeric",
          },
          {
            foreground: "f78c6c",
            token: "constant.character.numeric",
          },
          {
            foreground: "addb67",
            token: "variable",
          },
          {
            foreground: "c792ea",
            token: "keyword",
          },
          {
            foreground: "c792ea",
            token: "punctuation.accessor",
          },
          {
            foreground: "c792ea",
            token: "storage",
          },
          {
            foreground: "c792ea",
            token: "meta.var.expr",
          },
          {
            foreground: "c792ea",
            token:
              "meta.class meta.method.declaration meta.var.expr storage.type.jsm",
          },
          {
            foreground: "c792ea",
            token: "storage.type.property.js",
          },
          {
            foreground: "c792ea",
            token: "storage.type.property.ts",
          },
          {
            foreground: "c792ea",
            token: "storage.type.property.tsx",
          },
          {
            foreground: "82aaff",
            token: "storage.type",
          },
          {
            foreground: "ffcb8b",
            token: "entity.name.class",
          },
          {
            foreground: "ffcb8b",
            token: "meta.class entity.name.type.class",
          },
          {
            foreground: "addb67",
            token: "entity.other.inherited-class",
          },
          {
            foreground: "82aaff",
            token: "entity.name.function",
          },
          {
            foreground: "addb67",
            token: "punctuation.definition.variable",
          },
          {
            foreground: "d3423e",
            token: "punctuation.section.embedded",
          },
          {
            foreground: "d6deeb",
            token: "punctuation.terminator.expression",
          },
          {
            foreground: "d6deeb",
            token: "punctuation.definition.arguments",
          },
          {
            foreground: "d6deeb",
            token: "punctuation.definition.array",
          },
          {
            foreground: "d6deeb",
            token: "punctuation.section.array",
          },
          {
            foreground: "d6deeb",
            token: "meta.array",
          },
          {
            foreground: "d9f5dd",
            token: "punctuation.definition.list.begin",
          },
          {
            foreground: "d9f5dd",
            token: "punctuation.definition.list.end",
          },
          {
            foreground: "d9f5dd",
            token: "punctuation.separator.arguments",
          },
          {
            foreground: "d9f5dd",
            token: "punctuation.definition.list",
          },
          {
            foreground: "d3423e",
            token: "string.template meta.template.expression",
          },
          {
            foreground: "d6deeb",
            token: "string.template punctuation.definition.string",
          },
          {
            foreground: "c792ea",
            fontStyle: "italic",
            token: "italic",
          },
          {
            foreground: "addb67",
            fontStyle: "bold",
            token: "bold",
          },
          {
            foreground: "82aaff",
            token: "constant.language",
          },
          {
            foreground: "82aaff",
            token: "punctuation.definition.constant",
          },
          {
            foreground: "82aaff",
            token: "variable.other.constant",
          },
          {
            foreground: "7fdbca",
            token: "support.function.construct",
          },
          {
            foreground: "7fdbca",
            token: "keyword.other.new",
          },
          {
            foreground: "82aaff",
            token: "constant.character",
          },
          {
            foreground: "82aaff",
            token: "constant.other",
          },
          {
            foreground: "f78c6c",
            token: "constant.character.escape",
          },
          {
            foreground: "addb67",
            token: "entity.other.inherited-class",
          },
          {
            foreground: "d7dbe0",
            token: "variable.parameter",
          },
          {
            foreground: "7fdbca",
            token: "entity.name.tag",
          },
          {
            foreground: "cc2996",
            token: "punctuation.definition.tag.html",
          },
          {
            foreground: "cc2996",
            token: "punctuation.definition.tag.begin",
          },
          {
            foreground: "cc2996",
            token: "punctuation.definition.tag.end",
          },
          {
            foreground: "addb67",
            token: "entity.other.attribute-name",
          },
          {
            foreground: "addb67",
            token: "entity.name.tag.custom",
          },
          {
            foreground: "82aaff",
            token: "support.function",
          },
          {
            foreground: "82aaff",
            token: "support.constant",
          },
          {
            foreground: "7fdbca",
            token: "upport.constant.meta.property-value",
          },
          {
            foreground: "addb67",
            token: "support.type",
          },
          {
            foreground: "addb67",
            token: "support.class",
          },
          {
            foreground: "addb67",
            token: "support.variable.dom",
          },
          {
            foreground: "7fdbca",
            token: "support.constant",
          },
          {
            foreground: "7fdbca",
            token: "keyword.other.special-method",
          },
          {
            foreground: "7fdbca",
            token: "keyword.other.new",
          },
          {
            foreground: "7fdbca",
            token: "keyword.other.debugger",
          },
          {
            foreground: "7fdbca",
            token: "keyword.control",
          },
          {
            foreground: "c792ea",
            token: "keyword.operator.comparison",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.flow.js",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.flow.ts",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.flow.tsx",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.ruby",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.module.ruby",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.class.ruby",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.def.ruby",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.loop.js",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.loop.ts",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.import.js",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.import.ts",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.import.tsx",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.from.js",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.from.ts",
          },
          {
            foreground: "c792ea",
            token: "keyword.control.from.tsx",
          },
          {
            foreground: "ffffff",
            background: "ff2c83",
            token: "invalid",
          },
          {
            foreground: "ffffff",
            background: "d3423e",
            token: "invalid.deprecated",
          },
          {
            foreground: "7fdbca",
            token: "keyword.operator",
          },
          {
            foreground: "c792ea",
            token: "keyword.operator.relational",
          },
          {
            foreground: "c792ea",
            token: "keyword.operator.assignement",
          },
          {
            foreground: "c792ea",
            token: "keyword.operator.arithmetic",
          },
          {
            foreground: "c792ea",
            token: "keyword.operator.bitwise",
          },
          {
            foreground: "c792ea",
            token: "keyword.operator.increment",
          },
          {
            foreground: "c792ea",
            token: "keyword.operator.ternary",
          },
          {
            foreground: "637777",
            token: "comment.line.double-slash",
          },
          {
            foreground: "cdebf7",
            token: "object",
          },
          {
            foreground: "ff5874",
            token: "constant.language.null",
          },
          {
            foreground: "d6deeb",
            token: "meta.brace",
          },
          {
            foreground: "c792ea",
            token: "meta.delimiter.period",
          },
          {
            foreground: "d9f5dd",
            token: "punctuation.definition.string",
          },
          {
            foreground: "ff5874",
            token: "constant.language.boolean",
          },
          {
            foreground: "ffffff",
            token: "object.comma",
          },
          {
            foreground: "7fdbca",
            token: "variable.parameter.function",
          },
          {
            foreground: "80cbc4",
            token: "support.type.vendor.property-name",
          },
          {
            foreground: "80cbc4",
            token: "support.constant.vendor.property-value",
          },
          {
            foreground: "80cbc4",
            token: "support.type.property-name",
          },
          {
            foreground: "80cbc4",
            token: "meta.property-list entity.name.tag",
          },
          {
            foreground: "57eaf1",
            token: "meta.property-list entity.name.tag.reference",
          },
          {
            foreground: "f78c6c",
            token:
              "constant.other.color.rgb-value punctuation.definition.constant",
          },
          {
            foreground: "ffeb95",
            token: "constant.other.color",
          },
          {
            foreground: "ffeb95",
            token: "keyword.other.unit",
          },
          {
            foreground: "c792ea",
            token: "meta.selector",
          },
          {
            foreground: "fad430",
            token: "entity.other.attribute-name.id",
          },
          {
            foreground: "80cbc4",
            token: "meta.property-name",
          },
          {
            foreground: "c792ea",
            token: "entity.name.tag.doctype",
          },
          {
            foreground: "c792ea",
            token: "meta.tag.sgml.doctype",
          },
          {
            foreground: "d9f5dd",
            token: "punctuation.definition.parameters",
          },
          {
            foreground: "ecc48d",
            token: "string.quoted",
          },
          {
            foreground: "ecc48d",
            token: "string.quoted.double",
          },
          {
            foreground: "ecc48d",
            token: "string.quoted.single",
          },
          {
            foreground: "addb67",
            token: "support.constant.math",
          },
          {
            foreground: "addb67",
            token: "support.type.property-name.json",
          },
          {
            foreground: "addb67",
            token: "support.constant.json",
          },
          {
            foreground: "c789d6",
            token: "meta.structure.dictionary.value.json string.quoted.double",
          },
          {
            foreground: "80cbc4",
            token: "string.quoted.double.json punctuation.definition.string.json",
          },
          {
            foreground: "ff5874",
            token:
              "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
          },
          {
            foreground: "d6deeb",
            token: "variable.other.ruby",
          },
          {
            foreground: "ecc48d",
            token: "entity.name.type.class.ruby",
          },
          {
            foreground: "ecc48d",
            token: "keyword.control.class.ruby",
          },
          {
            foreground: "ecc48d",
            token: "meta.class.ruby",
          },
          {
            foreground: "7fdbca",
            token: "constant.language.symbol.hashkey.ruby",
          },
          {
            foreground: "e0eddd",
            background: "a57706",
            fontStyle: "italic",
            token: "meta.diff",
          },
          {
            foreground: "e0eddd",
            background: "a57706",
            fontStyle: "italic",
            token: "meta.diff.header",
          },
          {
            foreground: "ef535090",
            fontStyle: "italic",
            token: "markup.deleted",
          },
          {
            foreground: "a2bffc",
            fontStyle: "italic",
            token: "markup.changed",
          },
          {
            foreground: "a2bffc",
            fontStyle: "italic",
            token: "meta.diff.header.git",
          },
          {
            foreground: "a2bffc",
            fontStyle: "italic",
            token: "meta.diff.header.from-file",
          },
          {
            foreground: "a2bffc",
            fontStyle: "italic",
            token: "meta.diff.header.to-file",
          },
          {
            foreground: "219186",
            background: "eae3ca",
            token: "markup.inserted",
          },
          {
            foreground: "d3201f",
            token: "other.package.exclude",
          },
          {
            foreground: "d3201f",
            token: "other.remove",
          },
          {
            foreground: "269186",
            token: "other.add",
          },
          {
            foreground: "ff5874",
            token: "constant.language.python",
          },
          {
            foreground: "82aaff",
            token: "variable.parameter.function.python",
          },
          {
            foreground: "82aaff",
            token: "meta.function-call.arguments.python",
          },
          {
            foreground: "b2ccd6",
            token: "meta.function-call.python",
          },
          {
            foreground: "b2ccd6",
            token: "meta.function-call.generic.python",
          },
          {
            foreground: "d6deeb",
            token: "punctuation.python",
          },
          {
            foreground: "addb67",
            token: "entity.name.function.decorator.python",
          },
          {
            foreground: "8eace3",
            token: "source.python variable.language.special",
          },
          {
            foreground: "82b1ff",
            token: "markup.heading.markdown",
          },
          {
            foreground: "c792ea",
            fontStyle: "italic",
            token: "markup.italic.markdown",
          },
          {
            foreground: "addb67",
            fontStyle: "bold",
            token: "markup.bold.markdown",
          },
          {
            foreground: "697098",
            token: "markup.quote.markdown",
          },
          {
            foreground: "80cbc4",
            token: "markup.inline.raw.markdown",
          },
          {
            foreground: "ff869a",
            token: "markup.underline.link.markdown",
          },
          {
            foreground: "ff869a",
            token: "markup.underline.link.image.markdown",
          },
          {
            foreground: "d6deeb",
            token: "string.other.link.title.markdown",
          },
          {
            foreground: "d6deeb",
            token: "string.other.link.description.markdown",
          },
          {
            foreground: "82b1ff",
            token: "punctuation.definition.string.markdown",
          },
          {
            foreground: "82b1ff",
            token: "punctuation.definition.string.begin.markdown",
          },
          {
            foreground: "82b1ff",
            token: "punctuation.definition.string.end.markdown",
          },
          {
            foreground: "82b1ff",
            token: "meta.link.inline.markdown punctuation.definition.string",
          },
          {
            foreground: "7fdbca",
            token: "punctuation.definition.metadata.markdown",
          },
          {
            foreground: "82b1ff",
            token: "beginning.punctuation.definition.list.markdown",
          },
        ],
        colors: {
          "editor.foreground": "#d6deeb",
          "editor.background": "#011627",
          "editor.selectionBackground": "#5f7e9779",
          "editor.lineHighlightBackground": "#010E17",
          "editorCursor.foreground": "#80a4c2",
          "editorWhitespace.foreground": "#2e2040",
          "editorIndentGuide.background": "#5e81ce52",
          "editor.selectionHighlightBorder": "#122d42",
        },
      });
      monaco.editor.setTheme("nightowl");
    });
  }, []);

  const updateCode = (value: string | undefined, event?: any) => {
    setCurrentCode(value ?? "");
  };

  const getCommentedCode = async (e: any) => {
    e.preventDefault();
    console.log("Inside getCommentedCode");
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentCode }),
    });
    if (!response.ok) {
      console.log(response);
    }

    const data = await response.json();
    console.log("Returned code:", data.text.choices[0].message.content);
    setReturnedCode(data.text.choices[0].message.content);
  };


  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)] my-10 text-black bg-gray-900">
      <main>
        <div className="items-center">
          <p className="text-6xl text-center my-4 text-transparent bg-clip-text font-bold bg-gradient-to-r from-pink-500 to-blue-400">
            CommentLLM
          </p>
          <p className="text-3xl m-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
            Tired of documenting your codes? Use this tool to add comments to
            your code so everyone (including you) can understand what your code
            does!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="m-7 shadow-[0_0_20px_20px_rgba(236,72,153,0.3)]">
            <p className="text-white text-xl m-3">Input Code:</p>
            <Editor
              height="70vh"
              width="70vh"
              defaultLanguage="python"
              defaultValue="// Enter you code here"
              theme="nightowl"
              onChange={updateCode}
            />
          </div>
          <div className="m-7 shadow-[0_0_20px_20px_rgba(0,0,255,0.3)]">
            <p className="text-white text-xl m-3">Output Code:</p>
            <Editor
              height="70vh"
              width="70vh"
              defaultLanguage="python"
              defaultValue="// See AI commented output"
              theme="nightowl"
              value={returnedCode}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="text-align-center py-5 px-4 m-5 bg-gray-900 rounded-full shadow-[0_0_10px_10px_rgba(0,0,255,0.5)] hover:shadow-[0_0_10px_10px_rgba(0,0,255,0.8)]"
            onClick={getCommentedCode}
          >
            <p className="text-white">Get your comments</p>
          </button>
        </div>
      </main>
    </div>
  );
}
