// Funcionalidade de mostrar/ocultar senha
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('senha');
    const togglePasswordIcon = document.querySelector('.input-group input[type="password"] + img + img');
    
    if (togglePasswordIcon) {
        togglePasswordIcon.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Trocar ícone
            if (type === 'text') {
                this.src = '/assets/icons/eye.svg';
                this.alt = 'Ocultar senha';
            } else {
                this.src = '/assets/icons/eye-slash.svg';
                this.alt = 'Mostrar senha';
            }
        });
    }
    
    // Validação em tempo real
    const emailInput = document.getElementById('email');
    const submitButton = document.querySelector('.btn-entrar');
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validateForm() {
        const email = emailInput.value;
        const password = passwordInput.value;
        
        const isEmailValid = validateEmail(email);
        const isPasswordValid = password.length >= 6;
        
        // Atualizar visual dos campos
        if (email && !isEmailValid) {
            emailInput.style.borderColor = '#ef4444';
        } else if (email && isEmailValid) {
            emailInput.style.borderColor = '#10b981';
        } else {
            emailInput.style.borderColor = '#e2e8f0';
        }
        
        if (password && !isPasswordValid) {
            passwordInput.style.borderColor = '#ef4444';
        } else if (password && isPasswordValid) {
            passwordInput.style.borderColor = '#10b981';
        } else {
            passwordInput.style.borderColor = '#e2e8f0';
        }
        
        // Habilitar/desabilitar botão
        submitButton.disabled = !(isEmailValid && isPasswordValid);
    }
    
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    
    // Animação de loading no botão
    function setLoadingState(isLoading) {
        if (isLoading) {
            submitButton.innerHTML = '<span style="display: inline-block; width: 20px; height: 20px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></span> ENTRANDO...';
            submitButton.disabled = true;
        } else {
            submitButton.innerHTML = 'ENTRAR';
            submitButton.disabled = false;
        }
    }
    
    // Adicionar animação de spin
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Manipulador do formulário
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("senha").value;

        if (!validateEmail(email)) {
            showNotification('Por favor, insira um email válido.', 'error');
            return;
        }

        if (password.length < 6) {
            showNotification('A senha deve ter pelo menos 6 caracteres.', 'error');
            return;
        }

        handleLogin(email, password);
    });
    
    // Sistema de notificações
    function showNotification(message, type = 'info') {
        // Remover notificação existente
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'error' ? '#fee2e2' : type === 'success' ? '#dcfce7' : '#dbeafe'};
                color: ${type === 'error' ? '#dc2626' : type === 'success' ? '#16a34a' : '#2563eb'};
                padding: 16px 20px;
                border-radius: 8px;
                border-left: 4px solid ${type === 'error' ? '#dc2626' : type === 'success' ? '#16a34a' : '#2563eb'};
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                animation: slideInRight 0.3s ease-out;
                max-width: 300px;
                font-weight: 500;
            ">
                ${message}
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Remover após 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Adicionar animações para notificações
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);
});

async function handleLogin(email, password) {
    const submitButton = document.querySelector('.btn-entrar');
    
    // Ativar estado de loading
    setLoadingState(true);
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha: password })
        });

        const data = await response.json();

        if (data.success) {
            showNotification('Login realizado com sucesso! Redirecionando...', 'success');
            setTimeout(() => {
                window.location.href = '/home';
            }, 1500);
        } else {
            showNotification('Erro ao fazer login: ' + data.message, 'error');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        showNotification('Erro de conexão. Tente novamente.', 'error');
    } finally {
        // Desativar estado de loading
        setTimeout(() => setLoadingState(false), 1000);
    }
}

function setLoadingState(isLoading) {
    const submitButton = document.querySelector('.btn-entrar');
    if (isLoading) {
        submitButton.innerHTML = '<span style="display: inline-block; width: 20px; height: 20px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></span> ENTRANDO...';
        submitButton.disabled = true;
    } else {
        submitButton.innerHTML = 'ENTRAR';
        submitButton.disabled = false;
    }
}

function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#fee2e2' : type === 'success' ? '#dcfce7' : '#dbeafe'};
            color: ${type === 'error' ? '#dc2626' : type === 'success' ? '#16a34a' : '#2563eb'};
            padding: 16px 20px;
            border-radius: 8px;
            border-left: 4px solid ${type === 'error' ? '#dc2626' : type === 'success' ? '#16a34a' : '#2563eb'};
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
            font-weight: 500;
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

