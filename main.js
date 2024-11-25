const container = document.querySelector(".container");
const image = document.querySelector(".car-image");


const cursor = {
    isDragging: false,  // variavel se esta arrastando ou nao
    initialPosition: 0,
};

// vai controlar qual imagem que vai ser controlada
let currentImage = 1;

const updateImage = (direction) => {
    // se adireção for menor que 0
    // significa que o usuario arrastou para a direita
    //vamos passar uma imagem 
    if(direction < 0){
        // vamos incrementar uma imagem
        // se currentImage for igual a 12 ela vai volta 
        // para a primeira imagem
        if(currentImage == 12){
            currentImage = 1;
        }else{
            //se não ela continua incrementando a imagem
            currentImage += 1;
        }
    }

    if(direction > 0){
        // vamos decrementar uma imagem vamos voltar
        if(currentImage == 1){
            // se eu estou na imagem 1 e voltar 
            // eu não volto para a imagem 0 
            // eu volto para a imagem 12
            currentImage = 12;
        }else{
            //se não ela continua decrementando a imagem
            currentImage -= 1;
        }
    }

    //Vamos pegar a imagem e mudar o atributo dela
    // usando a variavel currentImage que vai incrementar
    // e decrementar a imagem
    image.src = `./img/${currentImage}.jpg`;
}

// Evento para quando clicar e segurar no mouse
container.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    // captura o evento no eixo horizontal event.clientX;
    cursor.initialPosition = event.clientX;

    // console.log(cursor.initialPosition);
    // console.log(cursor.isDragging);
});

// Evento para quando solta o click do mouse
container.addEventListener("mouseup", () => {
    cursor.isDragging = false;
});

// Evento de arrastar o mouse
// Passamos o clientX como parametro para desestrututar
// ou pegar o evento do mousedown 
// Só vai executar se clicar no mouse e arrastar ele
container.addEventListener("mousemove", ({ clientX }) => {
    // Podemos fazer essa verificação assim
    // if(cursor.initialPosition == false)
    // Se cursor não for verdadeiro não fça nada
    if(!cursor.isDragging) return;

    const offset = cursor.initialPosition - clientX;
    
    // Math.abs retorna um valor absoluto pose ser
    // negativo ou positiovo sempre retornara absoluto
    // se o valor absoluto de offset for maior ou igual
    // a 50
    if(Math.abs(offset) >= 50){
        // console.log(offset);

        // A função updateImage vai saber como executar 
        // baseado no offset que foi passado pra ela
        updateImage(offset);

        // Ele so vai executar de 50 em 50 
        // Não vai ficar executando localmente o tempo todo
        //por exemplo cliquei e movir o mouse 50 executa a
        //função movir mais 50 ele pega da onde o mouse tinha 
        // executado o ultimo 50 sem ser do inicio da pagina 
        cursor.initialPosition = clientX;
    }




    // console.log(Math.abs(offset));
    // console.log(clientX);
});