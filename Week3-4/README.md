# FabricJS를 이용한 저작도구 개발

- 기간: 2024.01.02 ~ 2023.01.12 (<i> 9일 </i>)
- Vercel link: <a href="https://authoring-tool-tau.vercel.app/" target="_blank">링크</a>

## 사용 라이브러리

|                                                   Jotai                                                   |                                                                        FabricJS                                                                        |                                                          Styled-Components                                                           |
| :-------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://storage.googleapis.com/candycode/jotai/jotai-mascot.png" alt="jotai 이미지" width="80"> | <img src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/000/064/071/datas/full_width.png" alt="fabricJS 이미지" width="80"> | <img src="https://velog.velcdn.com/images/tlsl13/post/da1e4478-6993-430d-930e-d0b0618383e8/image.png" alt="jotai 이미지" width="80"> |

### Jotai

<i>리액트의 상태 관리 라이브러리</i>

<b>작은 단위의 상태(atom)</b>를 통하여 상태관리

보일러 플레이트 코드가 적어 리덕스 대비 <b>간편한 사용</b>이 가능.<br/>

#### 사용방법

```javascript
/** atom 생성 **/
export const numAtom = useAtom(0);

/** atom 사용 **/
const [num, setNum] = useAtom(numAtom); // 값, 업데이트 함수 사용
const num = useAtomValue(numAtom); // 값만 사용
const setNum = useSetAtom(numAtom); // 업데이트 함수만 사용
```
