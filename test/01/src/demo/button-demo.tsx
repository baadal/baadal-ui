import React from 'react';
import { Link } from "react-router-dom";
import { MdDelete, MdSend } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { Button, MouseEventHandler } from '@baadal-sdk/baadal-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism as atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './button-demo.module.css';

const buttonHandler: MouseEventHandler<HTMLButtonElement> = () => {
  console.log('Button clicked!');
};

const btnClasses = {
  root: styles.btnRoot,
  content: styles.btnContent,
  icon: styles.btnIcon,
};

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
          <Button variant="solid" color="light">Light</Button>
          <Button variant="solid" color="dark">Dark</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="solid" color="success">Success</Button>
<Button variant="solid" color="error">Error</Button>
<Button variant="solid" color="warn">Warn</Button>
<Button variant="solid" color="info">Info</Button>
<Button variant="solid" color="light">Light</Button>
<Button variant="solid" color="dark">Dark</Button>`}
          </SyntaxHighlighter>
        </div>
        <div style={{ height: '8px' }}>&nbsp;</div>
        <div className={styles.sectionBody}>
          <Button variant="solid" color="primary">Primary</Button>
          <Button variant="solid" color="secondary">Secondary</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="solid" color="primary">Primary</Button>
<Button variant="solid" color="secondary">Secondary</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button Sizes</div>
        <div className={styles.sectionBody}>
          <Button variant="outlined" size="xs">Extra Small</Button>
          <Button variant="outlined" size="sm">Small</Button>
          <Button variant="outlined" size="md">Medium</Button>
          <Button variant="outlined" size="lg">Large</Button>
          <Button variant="outlined" size="xl">Extra Large</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="outlined" size="xs">Extra Small</Button>
<Button variant="outlined" size="sm">Small</Button>
<Button variant="outlined" size="md">Medium</Button>
<Button variant="outlined" size="lg">Large</Button>
<Button variant="outlined" size="xl">Extra Large</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button with rounded corners</div>
        <div className={styles.sectionBody}>
          <Button variant="solid" rounded="md">Rounded md</Button>
          <Button variant="solid" rounded="lg">Rounded lg</Button>
          <Button variant="solid" rounded="xl">Rounded xl</Button>
          <Button variant="solid" rounded="2xl">Rounded 2xl</Button>
          <Button variant="solid" rounded="full">Rounded full</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="solid" rounded="md">Rounded md</Button>
<Button variant="solid" rounded="lg">Rounded lg</Button>
<Button variant="solid" rounded="xl">Rounded xl</Button>
<Button variant="solid" rounded="2xl">Rounded 2xl</Button>
<Button variant="solid" rounded="full">Rounded full</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button with icon</div>
        <div className={styles.sectionBody}>
          <Button variant="outlined" icon={MdDelete}>DELETE</Button>
          <Button variant="outlined" icon={MdSend} iconRight>SEND</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`import { MdDelete, MdSend } from 'react-icons/md';
…
<Button variant="outlined" icon={MdDelete}>DELETE</Button>
<Button variant="outlined" icon={MdSend} iconRight>SEND</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Icon Button</div>
        <div className={styles.sectionBody}>
          <Button variant="solid" icon={FiPlus} />
          <Button variant="outlined" icon={FiPlus} rounded="xl" />
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`import { FiPlus } from 'react-icons/fi';
…
<Button variant="solid" icon={FiPlus} />
<Button variant="outlined" icon={FiPlus} rounded="xl" />`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button with <span className={styles.code}>disabled</span> or <span className={styles.code}>waiting</span> state</div>
        <div className={styles.sectionBody}>
          <Button variant="solid" disabled>Submit</Button>
          <Button variant="solid" waiting>Submitting..</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="solid" disabled>Submit</Button>
<Button variant="solid" waiting>Submitting..</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button with click handler</div>
        <div className={styles.sectionBody}>
          <Button variant="outlined" onClick={buttonHandler}>Click Me</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`import { Button, MouseEventHandler } from '@baadal-sdk/baadal-ui';
…
const buttonHandler: MouseEventHandler<HTMLButtonElement> = () => {
  console.log('Button clicked!');
};
…
<Button variant="outlined" onClick={buttonHandler}>Click Me</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Raised Button</div>
        <div className={styles.sectionBody}>
          <Button variant="solid" color="light" raised="md">Raised md</Button>
          <Button variant="solid" color="light" raised="lg">Raised lg</Button>
          <Button variant="solid" color="light" raised="xl">Raised xl</Button>
          <Button variant="solid" color="light" raised="2xl">Raised 2xl</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="solid" color="light" raised="md">Raised md</Button>
<Button variant="solid" color="light" raised="lg">Raised lg</Button>
<Button variant="solid" color="light" raised="xl">Raised xl</Button>
<Button variant="solid" color="light" raised="2xl">Raised 2xl</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button with custom inline style</div>
        <div className={styles.sectionBody}>
          <Button variant="outlined" style={{ color: 'tomato', borderColor: 'red' }}>
            My Button
          </Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`<Button variant="outlined" style={{ color: 'tomato', borderColor: 'red' }}>
  My Button
</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Button with custom style classes</div>
        <div className={styles.sectionBody}>
          <Button variant="solid" icon={FaHeart} classes={btnClasses}>My Button</Button>
        </div>
        <div className={styles.codeSnippet}>
          <SyntaxHighlighter language="jsx" style={atomDark}>
{`import { FaHeart } from 'react-icons/fa';
…
const btnClasses = {
  root: 'btn-root',
  content: 'btn-content',
  icon: 'btn-icon',
};
…
<Button variant="solid" icon={FaHeart} classes={btnClasses}>My Button</Button>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={atomDark}>
{`.btn-root {
  background-image: linear-gradient(to right, #4ade80, #3b82f6);
  border-color: transparent;
  background-clip: padding-box;
  border-radius: 0.42rem;
}

.btn-root:hover {
  background-image: linear-gradient(to right, #ec4899, #eab308);
}

.btn-content {
  padding-left: 10px;
}

.btn-icon {
  font-size: 100%;
}`}
          </SyntaxHighlighter>
        </div>
      </div>

      <br />
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ButtonDemo;
