document.addEventListener("DOMContentLoaded", function() {
    // Função para verificar quando o elemento entra na tela
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Adiciona a classe que ativa a animação
          observer.unobserve(entry.target); // Para de observar o elemento depois de animado
        }
      });
    }, { threshold: 0.5 }); // Observa quando 50% do elemento estiver visível
  
    // Alvo da animação (as cartas)
    const cards = document.querySelectorAll('.sec-pacotes .col-lg-3');
    cards.forEach(card => {
      observer.observe(card); // Observa cada carta para aplicar a animação
    });
  });