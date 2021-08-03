import Title from "antd/lib/typography/Title";
import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";
import { COLORS } from "../styles";

const Block = styled.div`
  background: ${COLORS.LIGHTGREY};
  border: 1px;
  padding: 8px;
  border-style: solid;
  border-color: ${COLORS.BLACK};
`;

interface CodeBlockProps {
  code: string;
  language: string;
  label?: string;
}

const customStyle = { background: "transparent", padding: "0", margin: "0" };

const CodeBlock = ({ code, language, label }: CodeBlockProps) => {
  return (
    <div style={{ marginBottom: "32px" }}>
      <Title level={5}>{label}</Title>
      <Block>
        <SyntaxHighlighter
          customStyle={customStyle}
          language={language}
          style={vs}
        >
          {code}
        </SyntaxHighlighter>
      </Block>
    </div>
  );
};

export default CodeBlock;
