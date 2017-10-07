import _ from 'underscore';

const funcs = [];

const sectionRender = (funcRender, state) => {
    let func = _.find(funcs, (f) => f.function === funcRender);

    if(!func) {
        func = {
            function: funcRender,
            lastState: state,
            rendered: funcRender(state)
        };
        funcs.push(func);
    }

    if(func.lastState !== state) {
        func.rendered = funcRender(state);
        func.lastState = state;
    }

    return func.rendered;
}

export default sectionRender;
