type Data = {
  isComplete: boolean;
  wrongCnt: number;
};

const ResultContainer = (
  title: string,
  startTime: string,
  studyTime: string,
  dataArr: Data[] = []
) => {
  const resultContainer = document.createElement("div");
  resultContainer.style.width = "320px";
  resultContainer.style.height = "500px";
  resultContainer.style.backgroundColor = "#F4F4F4";
  resultContainer.style.fontFamily = "NPSfontRegular";
  resultContainer.style.borderRadius = "20px";
  resultContainer.style.padding = "40px 20px";
  resultContainer.style.display = "flex";
  resultContainer.style.flexDirection = "column";
  resultContainer.style.alignItems = "center";

  const $title = document.createElement("span");
  $title.style.color = "#28B0F2";
  $title.style.fontFamily = "NPSfontExtrabold";
  $title.style.fontSize = "1.875rem";
  $title.textContent = title;

  resultContainer.appendChild($title);

  /** 데이터 배열(학습 이력)이 있다면 */
  if (dataArr.length === 4) {
    const $startTime = document.createElement("span");
    $startTime.style.fontSize = "0.75rem";
    $startTime.style.marginTop = "8px";
    $startTime.textContent = `${startTime} 기준`;

    const $studyTimeTitle = document.createElement("span");
    $studyTimeTitle.style.fontFamily = "NPSfontBold";
    $studyTimeTitle.style.fontSize = "1.25rem";
    $studyTimeTitle.style.marginTop = "50px";
    $studyTimeTitle.textContent = "학습 시간";

    const $studyTime = document.createElement("span");
    $studyTime.style.marginTop = "12px";
    $studyTime.textContent = studyTime;

    const $table = document.createElement("table");
    $table.style.width = "100%";
    $table.style.marginTop = "35px";
    $table.style.tableLayout = "fixed";

    const $tableHeader = createTr(true);
    $table.appendChild($tableHeader);

    for (let i = 0; i < dataArr.length; i++) {
      const $newTr = createTr(
        undefined,
        i + 1,
        dataArr[i].isComplete,
        dataArr[i].wrongCnt
      );
      $table.appendChild($newTr);
    }

    resultContainer.appendChild($startTime);
    resultContainer.appendChild($studyTimeTitle);
    resultContainer.appendChild($studyTime);
    resultContainer.appendChild($table);
  } else {
    /** 학습 이력이 없다면 */
    const $maxDiv = document.createElement("div");
    $maxDiv.style.width = "100%";
    $maxDiv.style.height = "100%";
    $maxDiv.style.display = "flex";
    $maxDiv.style.justifyContent = "center";
    $maxDiv.style.alignItems = "center";

    $maxDiv.textContent = "학습 이력이 없습니다.";

    resultContainer.appendChild($maxDiv);
  }

  return resultContainer;
};

const createTr = (
  isHeader: boolean = false,
  index: number = 0,
  isComplete: boolean = false,
  wrongCnt: number = 0
) => {
  const $tr = document.createElement("tr");

  if (isHeader) {
    $tr.style.fontFamily = "NPSfontBold";
    $tr.style.fontSize = "1.25rem";
    $tr.style.height = "40px";

    const $indexHeader = document.createElement("th");
    $indexHeader.textContent = "번호";

    const $isCompleteHeader = document.createElement("th");
    $isCompleteHeader.textContent = "정답 여부";

    const $wrongCntHeader = document.createElement("th");
    $wrongCntHeader.textContent = "오답 횟수";

    $tr.appendChild($indexHeader);
    $tr.appendChild($isCompleteHeader);
    $tr.appendChild($wrongCntHeader);
  } else {
    $tr.style.height = "26px";

    const $indexCell = document.createElement("td");
    $indexCell.style.textAlign = "center";
    $indexCell.style.fontFamily = "NPSfontBold";
    $indexCell.textContent = `${index}`;

    const $isCompleteCell = document.createElement("td");
    $isCompleteCell.style.textAlign = "center";
    if (isComplete) {
      $isCompleteCell.style.color = "#28B0F2";
      $isCompleteCell.textContent = "정답";
    } else {
      $isCompleteCell.style.color = "#F27D6B";
      $isCompleteCell.textContent = "오답";
    }

    const $wrongCntCell = document.createElement("td");
    $wrongCntCell.style.textAlign = "center";
    $wrongCntCell.textContent = `${3 - wrongCnt}`;

    $tr.appendChild($indexCell);
    $tr.appendChild($isCompleteCell);
    $tr.appendChild($wrongCntCell);
  }

  return $tr;
};

export default ResultContainer;
