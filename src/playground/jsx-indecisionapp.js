console.log('app is running');

const app={
    title: 'Indecision App',
    subtitle: 'Description',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = (e) => {
    app.options = [];
    renderApp();
}

const onMakeDecision = (e) => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
const renderApp = () => {

    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are some options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={removeAll}>Remove All</button>
            
            <ol>
                {
                    app.options.map((option) => <li key ={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                
            </form>
        </div>
    
);
    ReactDOM.render(template,appRoot);
};

renderApp();