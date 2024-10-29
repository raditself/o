document.addEventListener('DOMContentLoaded', (event) => {
    const chatInterface = document.getElementById('chat-interface');
    const workspaceComponents = ['code-editor', 'terminal', 'planner', 'jupyter', 'browser'];
    const configPanel = document.getElementById('configuration-panel');

    // Simple chat functionality
    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.placeholder = 'Type your message...';
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    chatInterface.appendChild(chatInput);
    chatInterface.appendChild(sendButton);

    sendButton.addEventListener('click', () => {
        if (chatInput.value.trim() !== '') {
            const message = document.createElement('p');
            message.textContent = 'User: ' + chatInput.value;
            chatInterface.insertBefore(message, chatInput);
            chatInput.value = '';
            // Here you would typically send the message to the AI and get a response
        }
    });

    // Workspace component tabs
    const tabContainer = document.createElement('div');
    workspaceComponents.forEach(component => {
        const tab = document.createElement('button');
        tab.textContent = component.replace('-', ' ').toUpperCase();
        tab.addEventListener('click', () => {
            workspaceComponents.forEach(c => {
                document.getElementById(c).style.display = c === component ? 'block' : 'none';
            });
        });
        tabContainer.appendChild(tab);
    });
    document.getElementById('workspace').prepend(tabContainer);

    // Configuration panel
    const configTitle = document.createElement('h3');
    configTitle.textContent = 'Configuration';
    configPanel.appendChild(configTitle);
    ['Model', 'Language', 'Theme'].forEach(setting => {
        const select = document.createElement('select');
        select.innerHTML = '<option>Select </option>';
        const label = document.createElement('label');
        label.textContent = setting + ': ';
        label.appendChild(select);
        configPanel.appendChild(label);
    });
});
