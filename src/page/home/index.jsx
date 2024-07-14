import { useState } from "react";
import Button from "../../components/button";
import Modal from "../../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/features/demoSlice";
import { add, clear, remove } from "../../redux/features/todoSlice";
import Table from "../../components/table";
import "./index.scss";

function Home() {
  //update value on store (redux) => useDispatch
  //get value on store (redux) => useSelector

  const testRedux = useSelector((store) => store.demo);
  const testDispatch = useDispatch();
  const toDoList = useSelector((store) => store.todo);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCancleModal = () => {
    setOpen(false);
  };

  const handleIncrement = () => {
    // dispatch => action
    testDispatch(increment());
  };

  const handleDecrement = () => {
    testDispatch(decrement());
  };

  const handleAddNewTask = () => {
    //collect input value
    console.log(input);
    testDispatch(
      add({
        title: input,
        status: "in-progress",
      })
    );
    //reset Input value
    setInput("");
  };

  const handleClearAll = () => {
    testDispatch(clear());
  };

  return (
    <div className="home">
      {/* <h1>{testRedux}</h1>

      <Button onClick={handleIncrement}>Increment</Button>
      <Button type="danger" onClick={handleDecrement}>
        Decrement
      </Button> */}

      {/* primary */}
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button onClick={handleAddNewTask}>Add New Task</Button>
      <Button type="danger" onClick={handleClearAll}>
        Clear All
      </Button>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Status",
            dataIndex: "status",
          },
          {
            title: "Action",
            dataIndex: "action",
            render: (record, index) => {
              return (
                <>
                  <Button>Edit</Button>
                  <Button
                    type="danger"
                    onClick={() => testDispatch(remove(index))}
                  >
                    Delete
                  </Button>
                </>
              );
            },
          },
        ]}
        dataSource={toDoList}
      />

      {/*button color red*/}
      {/* <Button type="danger">Delete</Button> */}
      <Modal onClose={handleCancleModal} open={open} />
    </div>
  );
}

export default Home;
