export function watch(originalMethod: any, context: ClassMethodDecoratorContext) {

    // Récuperation du nom de la fonction qui est décoré
    const nameMethod: string = context.name as string;

    // ↓ Cette fonction sera appeler a la place de la fonction original ! 
    function decoratorMethod(this: any, ...args: any[]) {

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