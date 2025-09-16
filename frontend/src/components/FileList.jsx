import React from "react";
import "./FileList.scss";

const FileList = () => {
  return (
    <ul className="file-list">
      <li>
        <h3>샘플 이미지</h3>
        <div className="img-wrap">
          <img
            src="https://aws-bucket-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758021999557-sYHE5Y-test.png"
            alt="image"
          />
        </div>
        <p>설명 샘플 입니다.</p>
        <a href="https://aws-bucket-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758021999557-sYHE5Y-test.png">
          Open
        </a>
        <button>Delete</button>
      </li>
      <li>
        <h3>샘플 이미지</h3>
        <div className="img-wrap">
          <img
            src="https://aws-bucket-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758021999557-sYHE5Y-test.png"
            alt="image"
          />
        </div>
        <p>설명 샘플 입니다.</p>
        <a href="https://aws-bucket-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758021999557-sYHE5Y-test.png">
          Open
        </a>
        <button>Delete</button>
      </li>
      <li>
        <h3>샘플 이미지</h3>
        <div className="img-wrap">
          <img
            src="https://aws-bucket-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758021999557-sYHE5Y-test.png"
            alt="image"
          />
        </div>
        <p>설명 샘플 입니다.</p>
        <a href="https://aws-bucket-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758021999557-sYHE5Y-test.png">
          Open
        </a>
        <button>Delete</button>
      </li>
    </ul>
  );
};

export default FileList;
