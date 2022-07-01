class Uploader extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      fileName: '' };

  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleInputChange(evt) {
    this.setState({
      fileName: this.fileInput.value ?
      this.fileInput.files[0].name :
      '' });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("label", null, /*#__PURE__*/
      React.createElement("input", { type: "file",
        onChange: this.handleInputChange,
        ref: input => this.fileInput = input,
        className: "form-control" })), /*#__PURE__*/

      React.createElement("br", null),

      this.state.fileName && /*#__PURE__*/
      React.createElement("h4", { className: "mt-3" }, "File: ", /*#__PURE__*/
      React.createElement("span", { className: "text-danger" }, this.state.fileName)));




  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Uploader, null),
document.querySelector('#root'));