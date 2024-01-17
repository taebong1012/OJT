type ValidityCommentProps = {
  isCheckingID: boolean;
  isValid: boolean;
};

/** 아이디가 사용가능한지, 혹은 비밀번호 확인이 맞는지 알려주는 코멘트
 * @param isCheckingID  아이디 사용 가능 여부를 확인하는 것인지(true) 비밀번호 확인을 하는것인지(false)
 * @param isValid       유효한 아이디/비밀번호확인 인지 아닌지
 */
const ValidityComment = ({ isCheckingID, isValid }: ValidityCommentProps) => {
  /** 아이디의 유효성 여부를 체크하는 것이라면 */
  if (isCheckingID) {
    /** 유효하다면 */
    if (isValid) {
      return (
        <div className="flex justify-end text-xs text-correct mb-3.5">
          사용가능한 ID 입니다.
        </div>
      );
    } else {
      /** 유효하지 않다면 */
      return (
        <div className="flex justify-end text-xs text-wrong mb-2">
          이미 사용중인 ID 입니다.
        </div>
      );
    }
  } else {
    /** 비밀번호 확인의 일치여부를 체크하는 것이라면 */
    /** 유효하다면 */
    if (isValid) {
      return (
        <div className="flex justify-end text-xs text-correct mb-2">
          비밀번호가 일치합니다.
        </div>
      );
    } else {
      /** 유효하지 않다면 */
      return (
        <div className="flex justify-end text-xs text-wrong mb-2">
          비밀번호가 일치하지 않습니다.
        </div>
      );
    }
  }
};

export default ValidityComment;
