/**
 * Wallet Adapter 폰트 패치 스크립트
 * 모든 지갑 어댑터 스타일 파일을 찾아서 DM Sans를 Orbitron으로 변경합니다.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM에서 현재 디렉토리 얻기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 지갑 어댑터 CSS 파일들의 가능한 경로들
const possiblePaths = [
  '../node_modules/@solana/wallet-adapter-react-ui/styles.css',
  '../node_modules/@solana/wallet-adapter-react-ui/dist/styles.css',
];

// CSS 내용
const css = `/* Orbitron font version of the wallet adapter styles */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

.wallet-adapter-button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: 'Orbitron', sans-serif !important;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    line-height: 48px;
    padding: 0 24px;
    border-radius: 4px;
}

.wallet-adapter-button-trigger {
    background-color: #512da8;
}

.wallet-adapter-button:not([disabled]):focus-visible {
    outline-color: white;
}

.wallet-adapter-button:not([disabled]):hover {
    background-color: #1a1f2e;
}

.wallet-adapter-button[disabled] {
    background: #404144;
    color: #999;
    cursor: not-allowed;
}

.wallet-adapter-button-end-icon,
.wallet-adapter-button-start-icon,
.wallet-adapter-button-end-icon img,
.wallet-adapter-button-start-icon img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

.wallet-adapter-button-end-icon {
    margin-left: 12px;
}

.wallet-adapter-button-start-icon {
    margin-right: 12px;
}

.wallet-adapter-collapse {
    width: 100%;
}

.wallet-adapter-dropdown {
    position: relative;
    display: inline-block;
}

.wallet-adapter-dropdown-list {
    position: absolute;
    z-index: 99;
    display: grid;
    grid-template-rows: 1fr;
    grid-row-gap: 10px;
    padding: 10px;
    top: 100%;
    right: 0;
    margin: 0;
    list-style: none;
    background: #2c2d30;
    border-radius: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: opacity 200ms ease, transform 200ms ease, visibility 200ms;
    font-family: 'Orbitron', sans-serif !important;
}

.wallet-adapter-dropdown-list-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
}

.wallet-adapter-dropdown-list-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    height: 37px;
    color: #fff;
    font-family: 'Orbitron', sans-serif !important;
}

.wallet-adapter-dropdown-list-item:not([disabled]):hover {
    background-color: #1a1f2e;
}

.wallet-adapter-modal-collapse-button svg {
    align-self: center;
    fill: #999;
}

.wallet-adapter-modal-collapse-button.wallet-adapter-modal-collapse-button-active svg {
    transform: rotate(180deg);
    transition: transform ease-in 150ms;
}

.wallet-adapter-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity linear 150ms;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1040;
    overflow-y: auto;
}

.wallet-adapter-modal.wallet-adapter-modal-fade-in {
    opacity: 1;
}

.wallet-adapter-modal-button-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 18px;
    right: 18px;
    padding: 12px;
    cursor: pointer;
    background: #1a1f2e;
    border: none;
    border-radius: 50%;
}

.wallet-adapter-modal-button-close:focus-visible {
    outline-color: white;
}

.wallet-adapter-modal-button-close svg {
    fill: #777;
    transition: fill 200ms ease 0s;
}

.wallet-adapter-modal-button-close:hover svg {
    fill: #fff;
}

.wallet-adapter-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.wallet-adapter-modal-container {
    display: flex;
    margin: 3rem;
    min-height: calc(100vh - 6rem); /* 100vh - 2 * margin */
    align-items: center;
    justify-content: center;
}

@media (max-width: 480px) {
    .wallet-adapter-modal-container {
        margin: 1rem;
        min-height: calc(100vh - 2rem); /* 100vh - 2 * margin */
    }
}

.wallet-adapter-modal-wrapper {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1050;
    max-width: 400px;
    border-radius: 10px;
    background: #10141f;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
    font-family: 'Orbitron', sans-serif !important;
    flex: 1;
}

.wallet-adapter-modal-wrapper .wallet-adapter-button {
    width: 100%;
}

.wallet-adapter-modal-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
    padding: 64px 48px 48px 48px;
    text-align: center;
    color: #fff;
    font-family: 'Orbitron', sans-serif !important;
}

@media (max-width: 374px) {
    .wallet-adapter-modal-title {
        font-size: 18px;
    }
}

.wallet-adapter-modal-list {
    margin: 0 0 12px 0;
    padding: 0;
    width: 100%;
    list-style: none;
}

.wallet-adapter-modal-list .wallet-adapter-button {
    font-weight: 400;
    border-radius: 0;
    font-size: 18px;
}

.wallet-adapter-modal-list .wallet-adapter-button-end-icon,
.wallet-adapter-modal-list .wallet-adapter-button-start-icon,
.wallet-adapter-modal-list .wallet-adapter-button-end-icon img,
.wallet-adapter-modal-list .wallet-adapter-button-start-icon img {
    width: 28px;
    height: 28px;
}

.wallet-adapter-modal-list .wallet-adapter-button span {
    margin-left: auto;
    font-size: 14px;
    opacity: .6;
    font-family: 'Orbitron', sans-serif !important;
}

.wallet-adapter-modal-list-more {
    cursor: pointer;
    border: none;
    padding: 12px 24px 24px 12px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: #fff;
    font-family: 'Orbitron', sans-serif !important;
}

.wallet-adapter-modal-list-more svg {
    transition: all 0.1s ease;
    fill: rgba(255, 255, 255, 1);
    margin-left: 0.5rem;
}

.wallet-adapter-modal-list-more-icon-rotate {
    transform: rotate(180deg);
}

.wallet-adapter-modal-middle {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px 24px 24px;
    box-sizing: border-box;
}

.wallet-adapter-modal-middle-button {
    display: block;
    cursor: pointer;
    margin-top: 48px;
    width: 100%;
    background-color: #512da8;
    padding: 12px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    color: #fff;
}`;

try {
  console.log('🔤 지갑 어댑터 폰트 패치 시작');
  
  // 모든 가능한 경로 확인
  for (const relativePath of possiblePaths) {
    const filePath = path.join(__dirname, relativePath);
    
    if (fs.existsSync(filePath)) {
      console.log(`🔤 지갑 어댑터 CSS 파일 발견: ${filePath}`);
      
      // 백업 파일 생성 (아직 없는 경우에만)
      const backupFile = `${filePath}.backup`;
      if (!fs.existsSync(backupFile)) {
        const originalContent = fs.readFileSync(filePath, 'utf8');
        fs.writeFileSync(backupFile, originalContent);
        console.log(`🔤 백업 파일 생성: ${backupFile}`);
      }
      
      // 새 CSS 내용 저장
      fs.writeFileSync(filePath, css);
      console.log(`🔤 성공적으로 패치됨: ${filePath}`);
    }
  }
  
  console.log('🔤 지갑 어댑터 폰트 패치 완료');
} catch (error) {
  console.error('🔤 패치 중 오류 발생:', error);
  process.exit(1);
}