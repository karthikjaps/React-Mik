import React from "react";

import ExecutionEnvironment from "exenv";

class ImageUpload extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      multiple: false,
      canUseDOM: false
    };
  }

  componentDidMount() {
    const { input, onImageNotFound } = this.props;

    if (!input.value && onImageNotFound) {
      onImageNotFound();
    }
    this.setState({
      canUseDOM: ExecutionEnvironment.canUseDOM,
      multiple: true
    });
  }

  render() {
    const {
      input,
      alt,
      label,
      urlPrefix = "",
      readOnly,
      className,
      multiple = false,
      onImageLoad,
      imageUploadClassName,
      title
    } = this.props;
    return (
      <div className={className ? `${className || ""}` : ""}>
        <div
          title={title}
          className={`image-upload ${
            imageUploadClassName ? `image-upload--${imageUploadClassName}` : ""
          } ${this.state.isLoading ? " loading" : ""}
            ${readOnly ? " readonly" : ""}`}
          onClick={() => this.fileUpload.click()}
        >
          <input
            name={`${input.name}_file`}
            id={`${input.name}_file`}
            type="file"
            readOnly={readOnly}
            ref={n => (this.fileUpload = n)}
            multiple={this.state.multiple && multiple}
            onChange={e => {
              const files = e.target.files;

              if (files) {
                for (let i = 0; i < files.length; i++) {
                  const file = files[i];
                  try {
                    this.setState({ isLoading: true });
                    if (file.size > 1024 * 1024 * 40) {
                      throw "Error: File size is too large";
                    }

                    // only process image files.
                    if (!file.type.match("image.*")) {
                      throw "Error: Invalid filetype";
                    }

                    const reader = new FileReader();

                    // closure to capture the file information
                    reader.onload = e => {
                      onImageLoad(file, e.target).then(() => {
                        this.setState({ isLoading: false });
                      });
                    };

                    // read in the image file as a data URL
                    reader.readAsDataURL(file);
                  } catch (e) {
                    this.setState({ isLoading: false });
                    alert(e);
                  }
                }
              }
            }}
          />
          <img
            src={`${input.value}`}
            alt={alt}
            title={label}
            className={`${className ? `${className}__img` : ""}`}
          />
          <input type="hidden" {...input} />
        </div>
        {!this.state.canUseDOM && (
          <label
            htmlFor={`${input.name}_file`}
            className={`${className ? `${className}__label` : ""}`}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
}

export default ImageUpload;
