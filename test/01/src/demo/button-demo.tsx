import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@baadal-sdk/baadal-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism as atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './button-demo.module.css';

function ButtonDemo() {
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>Button Component Demo</div>

      <div className={styles.section}>
        <div>
          <SyntaxHighlighter language="javascript" style={atomDark}>
{`import { Button } from '@baadal-sdk/baadal-ui';`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button Variants</div>
        <div className={styles.sectionBody}>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="solid">Solid</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="text">Text</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="solid">Solid</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button Colors</div>
        <div className={styles.sectionBody}>
          <Button variant="solid" color="success">Success</Button>
          <Button variant="solid" color="error">Error</Button>
          <Button variant="solid" color="warn">Warn</Button>
          <Button variant="solid" color="info">Info</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="solid" color="success">Success</Button>
<Button variant="solid" color="error">Error</Button>
<Button variant="solid" color="warn">Warn</Button>
<Button variant="solid" color="info">Info</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <br />
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ButtonDemo;
