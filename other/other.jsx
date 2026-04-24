const InfoNumber = ({ number }) => {
  const result = (num) => {
    return Math.sqrt(Number(num)) === Math.round(Math.sqrt(Number(num)));
  }

  return (
    <div>
      <p>количество цифр: {number.length}</p>
      <p>число {Number(number) % 2 == 0 ? "четное" : "нечетное"}</p>
      <p>полный квадрат {result(Number(num)) ? Math.sqrt(Number(number)) : "нет полного квадрата"}</p>
    </div>
  );
}

const Tasks = ({ firstValue, step }) => {
  const [numbers, setNumbers] = useState(firstValue);

  const handleNumber = () => {
    const nums = numbers.split(" ");
    const newNum = Number(nums[nums.length - 1]) + Number(step);
    setNumbers(nums.push(newNum).join(" "));
  }

  return (
    <div>
      <p>{numbers} <span onClick={handleNumber}>...</span></p>
    </div>
  );
}

class CreateRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [Number(props.firstValue)]
    };
  };

  handleAddNext = () => {
    const stepValue = Number(this.props.step);

    this.setState((prevState) => {
      const lastNumber = prevState.numbers[prevState.numbers.length - 1];
      const nextNumber = lastNumber + stepValue;

      return {
        numbers: [...prevState.numbers, nextNumber]
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.numbers.join(' ')}
        <span onClick={this.handleAddNext}>...</span>
      </div>
    );
  }
}

export default CreateRange;