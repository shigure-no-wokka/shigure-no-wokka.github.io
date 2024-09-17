import { visit } from 'unist-util-visit';

export function remarkAdmonition() {
    return (tree) => {
      visit(tree, 'blockquote', (node) => {
        const firstChild = node.children[0];
        const textNode = firstChild.children ? firstChild.children[0] : null;
  
        if (!textNode || !textNode.value) {
          return; // 跳过空节点
        }
  
        const text = textNode.value;
  
        // 定义不同提示类型的映射关系
        const admonitionMap = {
          '[!ERROR]': { class: 'alert alert-error', icon: getErrorIcon() },
          '[!INFO]': { class: 'alert alert-info', icon: getInfoIcon() },
          '[!SUCCESS]': { class: 'alert alert-success', icon: getSuccessIcon() },
          '[!WARNING]': { class: 'alert alert-warning', icon: getWarningIcon() },
        };
  
        // 检查文本是否匹配映射表中的项
        const matchedKey = Object.keys(admonitionMap).find(prefix => text.startsWith(prefix));
        if (matchedKey) {
          const { class: alertClass, icon } = admonitionMap[matchedKey];
          const displayText = text.replace(matchedKey, '').trim(); // 移除提示符号
  
          // 将 blockquote 替换为自定义 HTML
          node.type = 'html';
          node.value = `
            <div role="alert" class="${alertClass}">
              ${icon}
              <span>${displayText}</span>
            </div>`;
          node.children = [];
        }
      });
    };
  }
  
  

// 定义不同提示类型的 SVG 图标
function getErrorIcon() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `;
}

function getInfoIcon() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `;
}

function getSuccessIcon() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
  `;
}

function getWarningIcon() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `;
}
