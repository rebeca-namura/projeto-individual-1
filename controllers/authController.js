// controllers/authController.js
const AdmModel = require('../models/admModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './src/.env' }); 

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

exports.loginUsuario = async (req, res, next) => {
    try {
        console.log(req.body);
        
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: "Email e senha são obrigatórios." });
        }

        const usuario = await AdmModel.findByEmail(email);
        if (!usuario) {
            return res.status(401).json({ message: "Credenciais inválidas (usuário não encontrado)." });
        }

        // console.log('Senha fornecida:', senha);
        // console.log('Hash armazenado:', usuario.senha);
        // const senhaValida = await bcrypt.compare(senha, usuario.senha);
        const senhaValida = senha === usuario.senha;

        if (!senhaValida) {
            return res.status(401).json({ message: "Credenciais inválidas (senha incorreta)." });
        }

        const payload = {
            usuarioId: usuario.id,
            email: usuario.email,
            nome: usuario.nome
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            message: "Login bem-sucedido!",
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            },
            token_acesso: token,
            tipo_token: "Bearer"
        });

    } catch (error) {
        console.error('Erro no controller de login:', error);
        res.status(500).json({ message: "Erro interno no servidor ao tentar fazer login.", error: error.message });
    }
};
