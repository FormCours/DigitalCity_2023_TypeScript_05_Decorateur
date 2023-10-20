"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watch = void 0;
function watch(originalMethod, context) {
    // Récuperation du nom de la fonction qui est décoré
    const nameMethod = context.name;
    // ↓ Cette fonction sera appeler a la place de la fonction original ! 
    function decoratorMethod(...args) {
        // - Code qui sera executer avant la fonction original
        const startTime = (new Date()).getTime();
        // - Lancement de la fonction original (cela n'est pas obligatoire -> en fonction du context)
        const originalReturn = originalMethod.call(this, ...args);
        // - Code qui sera executer après la fonction original 
        const endTime = (new Date()).getTime();
        const executeTime = endTime - startTime;
        console.log(`Temps d'execution pour « ${nameMethod} » : ${executeTime}ms`);
        return originalReturn;
    }
    return decoratorMethod;
}
exports.watch = watch;
