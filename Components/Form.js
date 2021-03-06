import React from "react";

function Form(props) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    props.setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    props.setInputText("");
  };

  const filterHandler = (e) => {
    props.setFilter(e.target.value);
  };

  return (
    <form>
      <input
        value={props.inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onChange={filterHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
