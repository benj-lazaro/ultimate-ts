// Declare custom data types using type aliases
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

// Combine custom data types into a intersection data type
type UIWidget = Draggable & Resizeable;

// Annotate the intersection data type into an object
// Initialize properties of the intersection data type
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
