export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export function actionTv() {

    this.setState( () => {
        return {
            tv: 1
        }
    });
}


