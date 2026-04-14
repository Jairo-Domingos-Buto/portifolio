import tkinter as tk 
from tkinter import messagebox

# -----------------------------
# CONFIGURAÇÕES BÁSICAS
# -----------------------------
USUARIO_CORRETO = "admin"
SENHA_CORRETA = "1234"

TAXA_USD_EUR = 0.67
TAXA_EUR_USD = 1.09

# -----------------------------
# FUNÇÕES
# -----------------------------
def validar_login():
    usuario = entry_usuario.get()
    senha = entry_senha.get()

    if usuario == USUARIO_CORRETO and senha == SENHA_CORRETA:
        tela_login.destroy()
        abrir_conversor()
    else:
        messagebox.showerror("Erro", "Usuário ou senha incorretos")

def converter():
    try:
        valor = float(entry_valor.get())
        moeda = opcao.get()

        if moeda == "USD para EUR":
            resultado = valor * TAXA_USD_EUR
        else:
            resultado = valor * TAXA_EUR_USD

        label_resultado.config(text=f"Resultado: {resultado:.2f}")
    except ValueError:
        messagebox.showerror("Erro", "Digite um valor válido")

def abrir_conversor():
    global entry_valor, opcao, label_resultado

    conversor = tk.Tk()
    conversor.title("Conversor de Moedas")
    conversor.geometry("300x250")

    tk.Label(conversor, text="Valor:").pack(pady=5)
    entry_valor = tk.Entry(conversor)
    entry_valor.pack()

    opcao = tk.StringVar(value="USD para EUR")
    tk.Radiobutton(conversor, text="USD → EUR", variable=opcao, value="USD para EUR").pack()
    tk.Radiobutton(conversor, text="EUR → USD", variable=opcao, value="EUR para USD").pack()

    tk.Button(conversor, text="Converter", command=converter).pack(pady=10)

    label_resultado = tk.Label(conversor, text="Resultado:")
    label_resultado.pack()

    conversor.mainloop()

# -----------------------------
# TELA DE LOGIN
# -----------------------------
tela_login = tk.Tk()
tela_login.title("Login")
tela_login.geometry("300x200")

tk.Label(tela_login, text="Usuário:").pack(pady=5)
entry_usuario = tk.Entry(tela_login)
entry_usuario.pack()

tk.Label(tela_login, text="Senha:").pack(pady=5)
entry_senha = tk.Entry(tela_login, show="*")
entry_senha.pack()

tk.Button(tela_login, text="Entrar", command=validar_login).pack(pady=15)

tela_login.mainloop()
