export default function bubbleSort({ numbers }) {
    let nextNumbers = numbers.slice();

    return nextNumbers;
}

export default function BubbleSort(numbers) {
  const [arr, setArr] = useState([2, 3, 5, 7, 1, 4, 9, 6, 8]);
  const [result, setResult] = useState([]);
  //const [resultDom, setResultDom] = useState([]);
  //const [dom, setDom] = useState([]);
  const [isSort, setIsSort] = useState(false);

  useEffect(() => {
    sort();
  }, []);

  // Bubble sort
  const sort = () => {
    let arrCopy = [...arr];
    // Save each sorting result
    let resultCopy = [{ current: -1, sort: -1, data: [...arrCopy], exchange: '' }];

    for (let i = 0, l = arrCopy.length; i < l - 1; i++) {
      for (let j = i + 1; j < l; j++) {
        let temp = arrCopy[i];
        let exchange = '';
        if (arrCopy[i] > arrCopy[j]) {
          exchange = `${arrCopy[i]} ---> ${arrCopy[j]}`;
          arrCopy[i] = arrCopy[j];
          arrCopy[j] = temp;
        }
        resultCopy.push({ current: i, sort: j, data: [...arrCopy], exchange });
      }
    }

    //let domCopy = initDom(resultCopy);
    //setResult(resultCopy);
    //setIsSort(false);
    //setResultDom(domCopy);
    //getDom(domCopy, 0);
  };

  // Get the dom structrure of the sorting result
  //const getDom = (domCopy, i) => {
    //if (!domCopy[i]) return setIsSort(true);
    //setDom(i > 0 ? [domCopy[0], domCopy[i]] : [domCopy[0]]);
    //setTimeout(() => {
    //  getDom(domCopy, ++i);
    }, 500);
  };

  // initialize dom
  //const initDom = (resultCopy) => {
   // return resultCopy.map((item, i) => {
    //  return (
    //    <div
      //    key={i}
      //    style={{
       //     marginBottom: 5,
       //     border: '1px solid #ccc',
       //     padding: 5,
       //     display: 'flex',
       //     alignItems: 'flex-end',
       //   }}
        >
          <span style={{ width: 60, padding: '3px 10px', display: 'inline-block' }}>
            {i === 0 ? 'number of step' : i}
          </span>
          {item.data.map((num, j) => (
            <div
              key={j}
              style={{
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  margin: '0 10px',
                  display: 'inline-block',
                  padding: '3px 10px',
                  height: num * 10,
                  background: j === item.current ? 'green' : j === item.sort ? 'red' : '',
                }}
              ></div>
              <div>{num}</div>
            </div>
          ))}
          <span>{i === 0 ? 'exchange situation' : item.exchange}</span>
        </div>
      );
    });
  };

 // display the reslut of the n-th sorting 
 sortStep(index) {
    const resultDom = this.state.resultDom;
    this.setState({
      dom: [resultDom[0], resultDom[index]]
    });
  }
  
  render() {
    const arr = this.state.arr;
    const result = this.state.result;
    const dom = this.state.dom;
    const isSort = this.state.isSort;
  
    return (
      createElement("div", null,
        createElement("div", null,
          createElement("span", null, "bubble sort"),
          createElement(Button, {
            type: "primary",
            style: { marginLeft: 400 },
            onClick: () => this.sort(),
            disabled: !isSort
          }, "re-sort"),
          createElement("span", { style: { marginLeft: 100 } },
            createElement("span", null, "Display"),
            createElement(InputNumber, {
              min: 1,
              max: result.length - 1,
              disabled: !isSort,
              defaultValue: 0,
              onChange: this.sortStep.bind(this)
            }),
            createElement("span", null, "the reslut of   sorting")
          )
        ),
        createElement("p", null, "ascending order [", arr.join(','), "] length", arr.length, " number of step", result.length - 1),
        createElement("div", { style: { background: '#eee' } },
          dom
        )
      )
    );
  }
  