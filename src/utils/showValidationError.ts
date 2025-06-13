export function showValidationError(inputRef: HTMLElement | null, message: string) {
    if (!inputRef) return;
    const span = document.createElement('span');
    span.className = 'erro-validacao';
    span.style.color = '#ec2222';
    span.style.fontSize = '0.95em';
    span.style.display = 'block';
    span.style.marginTop = '8px';
    span.textContent = message;
    inputRef.parentElement?.appendChild(span);
}
