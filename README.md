# OJT

- 총 기간: 2023.12.19 ~ 2024.02.08 (50일)

- > ## 모듈 내 사용되는 공통 속성

-   ### directive | _`object`_

    지시문 설정

    ```javascript
    directive: {
        text: 'Listen and repeat.',
        x: { en: 80, ko: 90},
        y: { en: 52, ko: 52},
        tts: { x: 30, y: 29 } | tts : false  /* 스피커 이미지 사용하지 않을 때 */
        textClass: {
            en: 'ffbt',
            ko: 'ffng'
        },
        highlightClass: {
            en: ['fE1red'],                   /* 배열의 첫번째 원소, 첫번째 줄 하이라이트 설정 */
            ko: ['fE1red', 'fE1green'] ,      /* 각 원소가 배열인 경우 앞에서 부터 차례로 적용 */
        },
        fontSize : 20
        dy : fontSize + 5
    }
    ```

    -   `[필수]` text : 지시문 텍스트 설정
    -   `[옵션]` x : 텍스트 x 위치 (객체 형태로 넣지 않으면 국문/영문 동시에 적용)
        -   `[필수]` en : 영문 위치
        -   `[필수]` ko : 국문 위치
    -   `[옵션]` y : 텍스트 y 위치 (객체 형태로 넣지 않으면 국문/영문 동시에 적용)
        -   `[필수]` en : 영문 위치
        -   `[필수]` ko : 국문 위치
    -   `[옵션]` tts: 스피커 이미지 설정 (tts: false로 설정 시 스피커 이미지 나오지 않음)
        -   `[필수]` x : 사운드 x 위치
        -   `[필수]` y : 사운드 y 위치
    -   `[옵션]` textClass : 텍스트 클래스 설정 (객체 형태로 넣지 않으면 국문/영문 동시에 적용)
        -   `[필수]` en : 영문 클래스 설정
        -   `[필수]` ko : 국문 클래스 설정
    -   `[옵션]` highlightClass : 하이라이트 클래스 설정 (객체 형태로 넣지 않으면 국문/영문 동시에 적용)
        -   `[필수]` en : 영문 클래스 설정
        -   `[필수]` ko : 국문 클래스 설정
    -   `[옵션]` fontSize : 텍스트 크기
    -   `[옵션]` dy : 텍스트가 두 줄 처리 될 경우 간격

    <br />

-   ### soundButton | _`object`_

    듣기 기능이 포함된 버튼 모양을 만들 때 쓰임

    ```javascript
    soundButton: {
            x,
            y,
            width,
            height,
            // hintOffset: {x: 80, y: 0}
            buttonClass: 'f02 s04'
            // buttonEffect: true
            // shadow : true
            soundUrl: 'sounds/bat.mp3',
            attributes: {
                // CSS 속성
            }
            speakerImage: {
                imgUrl: 'images/E1speaker.svg',
                scale: 1
                // offset: {x, y}
            },
            innerImages: [
                {
                    x: 280,
                    y: 210,
                    imgUrl: 'images/bat001.png',
                    scale: 0.8
                    // offset
                }
            ],
            innerImage: {
                x: 280,
                y: 210,
                imgUrl: 'images/bat001.png',
                scale: 0.8
                // offset
            },
            innerText: {
                text: '$highlight{b}at',
                x: 450,
                y: 210,
                textClass: 'fE1red'
                fontSize: 80
            }
        }
    ```

    -   `[필수]` soundUrl : 사운드 인덱스 설정
    -   `[필수]` x : 버튼 x 위치
    -   `[필수]` y : 버튼 y 위치
    -   `[필수]` width : 버튼 width
    -   `[필수]` height : 버튼 height
    -   `[옵션]` hintOffset : 힌트 위치 미세 조정 (hint : false or 속성 제거 시 손가락 힌트 나오지 않음)
        -   `[필수]` x : 손가락 힌트 x 값
        -   `[필수]` y : 손가락 힌트 y 값
    -   `[옵션]` shadow : shadow 효과 설정
    -   `[옵션]` buttonEffect : button효과 설정
    -   `[옵션]` buttonClass : button class 설정
    -   `[옵션]` speakerImage : 스피커 이미지 설정
        -   `[필수]` imgUrl : 스피커 이미지 인덱스 설정
        -   `[필수]` scale : 이미지 크기 설정
        -   `[옵션]` offset : 이미지 위치 미세 조정
            -   `[필수]` x : 이미지 offset x 값
            -   `[필수]` y : 이미지 offset y 값
    -   `[옵션]` innerImages : 버튼 내부 이미지 설정(여러개)
        -   `[옵션]` x : 내부 이미지 x 위치
        -   `[옵션]` y : 내부 이미지 y 위치
        -   `[필수]` imgUrl : 내부 이미지 인덱스 설정
        -   `[필수]` scale : 이미지 크기 설정
        -   `[옵션]` offset : 이미지 위치 미세 조정
            -   `[필수]` x : 이미지 offset x 값
            -   `[필수]` y : 이미지 offset y 값
    -   `[옵션]` innerImage : 버튼 내부 이미지 설정(1개)
        -   `[옵션]` x : 내부 이미지 x 위치
        -   `[옵션]` y : 내부 이미지 y 위치
        -   `[필수]` imgUrl : 내부 이미지 인덱스 설정
        -   `[필수]` scale : 이미지 크기 설정
        -   `[옵션]` offset : 이미지 위치 미세 조정
            -   `[필수]` x : 이미지 offset x 값
            -   `[필수]` y : 이미지 offset y 값
    -   `[옵션]` innerText : 버튼 내부 텍스트 이미지 설정

        -   `[옵션]` x : 텍스트 이미지 x 위치
        -   `[옵션]` y : 텍스트 이미지 y 위치
        -   `[필수]` text : 텍스트
        -   `[필수]` fontSize : 텍스트
        -   `[옵션]` textClass : 텍스트 클래스 설정

    -   `[옵션]` attributes : 버튼 속성 설정

    <br />

-   ### createElement | _`object`_

    이미지, 텍스트 콘텐츠 그리기  
    order를 통해서 그려지는 순서를 정할 수 있습니다.  
    order가 높을수록 나중에 그려집니다.  
    ex) order가 1짜린 텍스트와 order2짜린 이미지가 한 곳에 그려질 경우 order 1짜리인 텍스트가 order 2짜리인 이미지 뒷쪽으로 가게됩니다.  
    ex) order가 같은 경우 image -> text -> textPath 순으로 그려집니다.(image가 제일 하단에 그려짐)

    ```javascript
    createElement: {
        image: [
            { order: 1, x: 400, y: 200, scale: 1, imgUrl: 'images/bus001.png', center: true, rotation: 30 },
            { order: 4, x: 400, y: 200, scale: 1, imgUrl: 'images/bus001.png', center: true }
        ],
        text: [
            { order: 1, x: 400, y: 200, fontSize: 40, word: 'test', textClass: 'ffsb', highlightClass: 'fE1red', center: true },
            { order: 3, x: 400, y: 200, fontSize: 40, word: 'test', textClass: 'ffsb', highlightClass: 'fE1red', center: true }
        ],
        shape: [
            { order: 0, type: 'rect', x: 400, y: 300, width: 100, height: 100, roundedCornerX: 0, roundedCornerY: 0, center: true, shapeClass: 'f01 s01' },
            { order: 0, type: 'circle', cx: 400, cy: 300, shapeClass: 'f01 s01' },
            { order: 0, type: 'ellipse', x: 400, y: 300, radiusX: 100, radiusY: 50, shapeClass: 'f01 s01' }
        ],
        textPath: [{ order: 0, x: 200, y: 200, scale: 1.5, gap: 0, text: 'Bb', fillCalss: 'f01 s01', centerX: true }],
        totalOrder: 1000
    },
    ```

    -   `[옵션]` image : 이미지 설정

        -   `[필수]` order : 순서 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` scale : 스케일 설정
        -   `[필수]` imgUrl : 이미지 인덱스 설정
        -   `[옵션]` rotation : 이미지 회전 (기본: 0)
        -   `[옵션]` rx : rx 설정
        -   `[옵션]` ry : ry 설정
        -   `[옵션]` center : x, y를 중심으로 중앙 정렬

    -   `[옵션]` shape : 도형 설정

        -   `[필수]` order : 순서 설정
        -   `[필수]` type: 그릴 도형 타입 설정
        -   `[필수]` shapeClass: 도형 색상 클래스 설정
        -   `[필수]` shapeAttribute: 도형 attribute 설정
        -   `rect` : 사각형
            -   `[필수]` x : x 위치 설정
            -   `[필수]` y : y 위치 설정
            -   `[필수]` width : 가로 길이 설정
            -   `[필수]` height : 세로 길이 설정
            -   `[옵션]` roundedCorcerX : 모서리 x방향 라운드값 설정 (기본: 0)
            -   `[옵션]` roundedCorcerY : 모서리 y방향 라운드값 설정 (기본: 0)
            -   `[옵션]` center : x, y를 중심으로 중앙 정렬
        -   `circle` : 원
            -   `[필수]` cx : 원의 중심 x 위치 설정
            -   `[필수]` cy : 원의 중심 y 위치 설정
            -   `[필수]` radius : 반지름 설정
        -   `ellipse` : 타원
            -   `[필수]` cx : 타원의 중심 x 위치 설정
            -   `[필수]` cy : 타원의 중심 y 위치 설정
            -   `[필수]` radiusX : 타원 x 방향 반지름 설정
            -   `[필수]` radiusY: 타원 y 방향 반지름 설정

    -   `[옵션]` text : 텍스트 설정

        -   `[필수]` order : 순서 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` word : 텍스트 설정
        -   `[옵션]` fontSize : fontSize 설정
        -   `[옵션]` textClass : 텍스트 클래스 설정
        -   `[옵션]` highlightClass : highlight 클래스 설정
        -   `[옵션]` centerX : x를 중심으로 중앙 정렬

    -   `[옵션]` textPath : Path 형태 텍스트 설정

        -   `[필수]` order : 순서 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` scale : 스케일 설정
        -   `[필수]` gap : 텍스트 Path 간격 설정
        -   `[필수]` text : 텍스트 설정
        -   `[필수]` fillClass : 클래스 설정
        -   `[필수]` centerX : x를 중심으로 중앙 정렬

    -   `[옵션]` totalOrder : 콘텐츠 내 전체 그려지는 순서 설정기본적으로 가장 우선시 되어 그려지기 때문에 기타 다른 메타로 받아서 그려지는 콘텐츠 뒤에 가려짐  
         메타로 받아서 그려지는 콘텐츠 위에 그려져야 할 경우 사용

-   ### tryCount | _`string`_

    시도 횟수 설정(기본 3)  
    Infinity 설정 시 무제한

    ```javascript
    tryCount: 3;
    ```

-   ### frame2dBackgroundWhite | _`boolean`_

    백그라운드 흰색 설정 여부

    ```javascript
    frame2dBackgroundWhite: true;
    ```

-   ### nextFrameDelayTime | _`number`_

    다음 문항 넘어가는 시간 설정(기본: 300)

    ```javascript
    nextFrameDelayTime: 3000;
    ```

<br />

<br />
<br />

> ## EM000001

    음가 이야기 듣기(전체 듣기)

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000001',
        directive: {
            text: 'Listen and repeat.'
            // x: 70
            // y: 50
            // fill: ['red']
            // tts: {x: 30, y: 29}
        },
        mainImage: {
            imgUrl: 'images/sample001.png',
            scale: 1
            // x: 400
            // y: 230
            // center: true
        },
        showFocusArea: true,
        focusArea: [
            {
                startTime: 0,
                duration: 2000,
                easing: { maxTime: 0.5, holdTime: 0.2 },
                cx: 340,
                cy: 325,
                radius: 50,
                ratio: 1.5
            }
        ],
        listenButton: {
            imgUrl: 'images/icon_03.svg',
            soundUrl: 'sounds/frame1.mp3',
            scale: 0.8
            // x: 350
            // y: 440
            // center: true
        },
        endButton: {
            activeImgUrl: 'images/icon_04.svg',
            nonActiveImgUrl: 'images/icon_06.svg',
            scale: 0.8
            // x: 450
            // y: 440
            // center: true
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000001';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정

    -   `[필수]` text : 지시문 텍스트 설정
    -   `[옵션]` x : 텍스트 x 위치
    -   `[옵션]` y : 텍스트 y 위치
    -   `[옵션]` fill : 하이라이트 된 텍스트 색상 설정 (array or string)
    -   `[옵션]` tts: 스피커 이미지 설정 (tts: false로 설정 시 스피커 이미지 나오지 않음)
        -   `[필수]` x : 사운드 x 위치
        -   `[필수]` y : 사운드 y 위치

    ```javascript
    directive: {
        text: 'Listen and repeat.',
        // x: 70
        // y: 50
        // fill: ['red'] or 'red' /* 배열인 경우 앞에서 부터 차례로 적용 됨 */
        // tts: { x: 30, y: 29 } | tts : false  /* 스피커 이미지 사용하지 않을 때 */
    }
    ```

    <br />

-   > `[필수]` mainImage | _`object`_

    중앙 이미지 설정

    -   `[필수]` imgUrl : 중앙 이미지 인덱스 설정
    -   `[필수]` scale : 이미지 크기 설정
    -   `[옵션]` x : 이미지 x 위치
    -   `[옵션]` y : 이미지 y 위치
    -   `[옵션]` center : 이미지를 x, y 기준 중앙 정렬

    ```javascript
    mainImage: {
        imgUrl: 'images/sample001.png',
        scale: 1
        // x: 400
        // y: 230
        // center: true
    }
    ```

    <br />

-   > `[옵션]` showFocusArea | _`boolean`_

    원이 그려질 focusArea 확인용

    ```javascript
    focusArea: true;
    ```

-   > `[옵션]` focusArea | _`Array[object]`_

    확대 영역 설정  
    배열 안의 수 만큼 동작

    -   `[필수]` startTime : 시작 시간 설정
    -   `[필수]` duration : 확대되는 시간 설정
    -   `[옵션]` easing : 설정한 duration동안 원이 커지고, 멈춰있는 시간 설정
        -   `[옵션]` maxTime : 커지는 시간 비율 설정
        -   `[옵션]` holdTime : 멈춰 있는 시간 비율 설정
    -   `[필수]` cx : 확대 원이 그려질 cx
    -   `[필수]` cy : 확대 원이 그려질 cy
    -   `[필수]` radius : 확대 원의 반지름
    -   `[필수]` ratio : 원 안의 그림 확대 비율

    ```javascript
    focusArea: [
        {
            startTime: 0,
            duration: 2000,
            easing: { maxTime: 0.5, holdTime: 0.3 },
            cx: 340,
            cy: 325,
            radius: 50,
            ratio: 1.5
        }
    ];
    ```

-   > `[필수]` listenButton | _`object`_

    듣기 이미지 설정

    -   `[필수]` imgUrl : 듣기 이미지 인덱스 설정
    -   `[필수]` soundUrl : 사운드 인덱스 설정
    -   `[필수]` scale : 이미지 크기 설정
    -   `[옵션]` x : 이미지 x 위치
    -   `[옵션]` y : 이미지 y 위치
    -   `[옵션]` center : 이미지를 x, y 기준 중앙 정렬

    ```javascript
    listenButton: {
        imgUrl: 'images/icon_03.svg',
        soundUrl: 'sounds/frame1.mp3',
        scale: 0.8
        // x: 350
        // y: 440
        // center: true
    }
    ```

    <br />

-   > `[필수]` endButton | _`object`_

    종료 이미지 설정

    -   `[필수]` activeImgUrl : 활성화 상태 종료 이미지 인덱스 설정
    -   `[필수]` nonActiveImgUrl : 활성화 상태 종료 이미지 인덱스 설정
    -   `[필수]` scale : 이미지 크기 설정
    -   `[옵션]` x : 이미지 x 위치
    -   `[옵션]` y : 이미지 y 위치
    -   `[옵션]` center : 이미지를 x, y 기준 중앙 정렬

    ```javascript
    endButton: {
        activeImgUrl: 'images/icon_04.svg',
        nonActiveImgUrl: 'images/icon_06.svg',
        // scale: 0.8
        // x: 450
        // y: 440
        // center: true
    }
    ```

<br />

> ## EM000002

    음가 이야기 듣기(선택하여 듣기)

-   #### 기본 포맷

    ```javascript
      {
        questionType: 'EM000002',
        directive: { text: 'Listen and repeat.' },
        getPathData: true,
        mainImage: {
            imgUrl: 'images/sample001.png',
            scale: 1
            // x: 400
            // y: 230
            // center: true
        },
        soundArea: [
            {
                soundUrl: 'sounds/big.mp3',
                x: 290,
                y: 280,
                width: 90,
                height: 100,
                center: false,
                hintOffset: { x: 30, y: 0 }
                // pathStr
                // hintOffset: { x: 0, y: 0 }
                // center: true
                // check: false
            }
        ],
        endButton: {
            activeImgUrl: 'images/icon_04.svg',
            nonActiveImgUrl: 'images/icon_06.svg',
            scale: 0.8
            // x: 400
            // y: 440
            // center: true
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000002';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정

    -   `[필수]` text : 지시문 텍스트 설정
    -   `[옵션]` x : 텍스트 x 위치
    -   `[옵션]` y : 텍스트 y 위치
    -   `[옵션]` fill : 하이라이트 된 텍스트 색상 설정 (array or string)
    -   `[옵션]` tts: 스피커 이미지 설정 (tts: false로 설정 시 스피커 이미지 나오지 않음)
        -   `[필수]` x : 사운드 x 위치
        -   `[필수]` y : 사운드 y 위치

    ```javascript
    directive: {
        text: 'Listen and repeat.',
        // x: 70
        // y: 50
        // fill: ['red'] or 'red' /* 배열인 경우 앞에서 부터 차례로 적용 됨 */
        // tts: { x: 30, y: 29 } | tts : false  /* 스피커 이미지 사용하지 않을 때 */
    }
    ```

    <br />

-   > `[옵션]` getPathData | _`boolean`_

    패쓰 데이터를 얻을 때 사용 (기본: false)

    ```javascript
    getPathData: false;
    ```

    <br />

-   > `[필수]` mainImage | _`object`_

    중앙 이미지 설정

    -   `[필수]` imgUrl : 중앙 이미지 인덱스 설정
    -   `[필수]` scale : 이미지 크기 설정
    -   `[옵션]` x : 이미지 x 위치
    -   `[옵션]` y : 이미지 y 위치
    -   `[옵션]` center : 이미지를 x, y 기준 중앙 정렬

    ```javascript
    // DEFAULT
    mainImage: {
        imgUrl: 'images/sample001.png',
        scale: 1
        // x: 400
        // y: 230
        // center: true
    }
    ```

    <br />

-   > `[필수]` soundArea | _`array[object]`_

    듣기 영역 설정

    -   `[필수]` soundUrl : 사운드 인덱스 설정
    -   `[필수]` x : 듣기 영역 x 위치
    -   `[필수]` y : 듣기 영역 y 위치
    -   `[필수]` width : 듣기 영역 width
    -   `[필수]` height : 듣기 영역 height
    -   `[옵션]` hintOffset : 손가락 힌트 미세 설정 (기본: 듣기 영역 중앙)
        -   `[필수]` x : 손가락 힌트 offset x 값
        -   `[필수]` y : 손가락 힌트 offset y 값
    -   `[조건]` pathStr : 영역을 패쓰로 그려줌 (x, y, width, height or pathStr 중 하나는 있어야함)
    -   `[옵션]` center : 영역을 x, y 기준 중앙 정렬
    -   `[옵션]` check : 그려지는 영역 확인할 때 사용

    ```javascript
    // DEFAULT
    soundArea: [
        {
            soundUrl: 'sounds/big.mp3',
            x: 290,
            y: 280,
            width: 90,
            height: 100
            //pathStr : ''
            // hintOffset: { x: 0, y: 0 }
            // center: true
            // check: false
        }
    ];
    ```

-   > `[필수]` endButton | _`object`_

    종료 이미지 설정

    -   `[필수]` activeImgUrl : 활성화 상태 종료 이미지 인덱스 설정
    -   `[필수]` nonActiveImgUrl : 활성화 상태 종료 이미지 인덱스 설정
    -   `[필수]` scale : 이미지 크기 설정
    -   `[옵션]` x : 이미지 x 위치
    -   `[옵션]` y : 이미지 y 위치
    -   `[옵션]` center : 이미지를 x, y 기준 중앙 정렬

    ```javascript
    // DEFAULT
    endButton: {
        activeImgUrl: 'images/icon_04.svg',
        nonActiveImgUrl: 'images/icon_06.svg',
        // scale: 0.8
        // x: 450
        // y: 440
        // center: true
    }
    ```

<br />

> ## EM000003

    듣고 따라 말하기

-   ### 기본 포맷
    ```javascript
    {
        questionType: 'EM000003',
        directive: {
            text: 'Listen and repeat.'
            // x: 70,
            // y: 50,
            // tts: {x: 30, y: 29}
        },
        soundButton: {
            // x
            // y
            // width
            // height
            // center
            // hintOffset
            soundUrl: 'sounds/bat.mp3',
            speakerImage: {
                imgUrl: 'images/E1speaker.svg',
                scale: 1
                // offset: {x, y}
                // scale
                // center
            },
            innerImages: [
                {
                    x: 280,
                    y: 210,
                    imgUrl: 'images/bat001.png',
                    scale: 0.8
                    // center
                    // offset
                }
            ],
            innerText: {
                text: '$highlight{b}at',
                x: 450,
                y: 210,
                fill: 'red'
                // fill
                // fontSize: 80
            }
        },
        record: {
            scale: 0.7,
            activeRecordImgUrl: 'images/icon_07.svg',
            activePlayImgUrl: 'images/icon_09.svg',
            activeEndImgUrl: 'images/icon_05.svg',
            activeRecordStopImgUrl: 'images/icon_13.svg',
            nonActiveRecordImgUrl: 'images/icon_08.svg',
            nonActivePlayImgUrl: 'images/icon_10.svg',
            nonActiveEndImgUrl: 'images/icon_06.svg'
            // x
            // y
            // gap
        }
    }
    ```
-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000003';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정

    -   `[필수]` text : 지시문 텍스트 설정
    -   `[옵션]` x : 텍스트 x 위치
    -   `[옵션]` y : 텍스트 y 위치
    -   `[옵션]` fill : 하이라이트 된 텍스트 색상 설정 (array or string)
    -   `[옵션]` tts: 스피커 이미지 설정 (tts: false로 설정 시 스피커 이미지 나오지 않음)
        -   `[필수]` x : 사운드 x 위치
        -   `[필수]` y : 사운드 y 위치

    ```javascript
    directive: {
        text: 'Listen and repeat.',
        // x: 70
        // y: 50
        // fill: ['red'] or 'red' /* 배열인 경우 앞에서 부터 차례로 적용 됨 */
        // tts: { x: 30, y: 29 } | tts : false  /* 스피커 이미지 사용하지 않을 때 */
    }
    ```

    <br />

-   > `[필수]` soundButton | _`object`_

    듣기 버튼 설정  
    (자세한 내용은 하단의 모듈 내 사용되는 공통 속성 참고)

    <br />

-   > `[필수]` record | _`object`_

    녹음/재생/종료 이미지 설정

    -   `[필수]` scale : 이미지 크기 설정
    -   `[필수]` activeRecordImgUrl : 녹음 활성화 이미지 인덱스 설정
    -   `[필수]` activePlayImgUrl : 재생 활성화 이미지 인덱스 설정
    -   `[필수]` activeEndImgUrl : 종료 활성화 이미지 인덱스 설정
    -   `[필수]` activeRecordStopImgUrl : 녹음 중지 활성화 이미지 인덱스 설정
    -   `[필수]` nonActiveRecordImgUrl : 녹음 비활성화 이미지 인덱스 설정
    -   `[필수]` nonActivePlayImgUrl : 재생 비활성화 이미지 인덱스 설정
    -   `[필수]` nonActiveEndImgUrl : 종료 비활성화 이미지 인덱스 설정
    -   `[옵션]` x : 녹음/재생/종료 전체 이미지 x 위치
    -   `[옵션]` y : 녹음/재생/종료 전체 이미지 y 위치
    -   `[옵션]` gap : 녹음/재생/종료 이미지 간 간격

    ```javascript
    record: {
        scale: 0.7,
        activeRecordImgUrl: 'images/icon_07.svg',
        activePlayImgUrl: 'images/icon_09.svg',
        activeEndImgUrl: 'images/icon_05.svg',
        activeRecordStopImgUrl: 'images/icon_13.svg',
        nonActiveRecordImgUrl: 'images/icon_08.svg',
        nonActivePlayImgUrl: 'images/icon_10.svg',
        nonActiveEndImgUrl: 'images/icon_06.svg'
        // x
        // y
        // gap
    }
    ```

> ## EM000004

    듣기 후 따라쓰기

-   ### 기본 포맷

```javascript
{
    questionType: 'EM000004',
    directive: { text: 'text_index_0' },
    soundButton: {
        x: 170,
        y: 210,
        width: 200,
        height: 180,
        center: true,
        buttonClass: 'f02 s04',
        soundUrl: 'sound_index_0',
        speakerImage: { imgUrl: 'image_index_0', scale: 1 },
        innerImage: { imgUrl: 'image_index_1', scale: 0.7 }
        // hintOffset: { x: 80, y: 0 }
    },
    area: {
        x: 535,
        y: 210,
        width: 460,
        height: 180,
        roundedCornerX: 7.5,
        roundedCornerY: 7.5,
        areaClass: 'f06'
    },
    trace: {
        text: 'BAE',
        target: [
            { index: 0, endFillStrokeClass: 'fno s01' },
            { index: 1, endFillStrokeClass: 'fno s01' },
            { index: 2, endFillStrokeClass: 'fno s01' }
        ],
        scale: 2,
        gap: 0,
        offset: { x: 0, y: 0 },
        fillStrokeClass: 'fno s05',
        backgroundClass: 'f12',
        traceEndFillStrokeClass: {
            index: [0, 1, 2],
            fillStrokeClass: 'fno s14'
        }
    }
}
```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000004';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` soundButton | _`object`_

    듣기 버튼 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` area | _`object`_

    따라쓰기 영역 설정

    -   `[필수]` x : 따라쓰기 영역 x 위치
    -   `[필수]` y : 따라쓰기 영역 y 위치
    -   `[필수]` width : 따라쓰기 영역 width
    -   `[필수]` height : 따라쓰기 영역 height
    -   `[옵션]` roundedCornerX : x 방향 라운드 값 설정 (기본: 0)
    -   `[옵션]` roundedCornerY : y 방향 라운드 값 설정 (기본: 0)
    -   `[옵션]` areaClass: areaClass 설정 (기본: '')

    ```javascript
    //DEDAULT
    area: {
        x: 535,
        y: 210,
        width: 460,
        height: 180,
        // roundedCornerX: 7.5,
        // roundedCornerY: 7.5,
        // areaClass: 'f06'
    },
    ```

    <br />

-   > `[필수]` trace | _`array[object]`_

    따라쓰기 설정

    -   `[필수]` text : 텍스트 설정
    -   `[필수]` target : 따라 쓰기 할 텍스트 설정
        -   `[필수]` index : 따라 쓰기 할 인덱스 설정
        -   `[필수]` endFillStrokeClass : 따라 쓰기 끝난 후 바뀔 색 클래스 설정
    -   `[필수]` scale : 스케일 설정
    -   `[필수]` gap : 글자간 간격 설정
    -   `[옵션]` offset : 따라 쓰기 글자 위치 미세 조정 (기본: {x: 0, y: 0})
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[옵션]` fillStrokeClass : 따라 쓰기 동안 채워지는 색 클래스 설정 (기본: '')
    -   `[옵션]` backgroundClass : 따라 쓰기 배경색 설정 (기본: 'fno sE1lightgray')
    -   `[옵션]` traceEndFillStrokeClass : 따라 쓰기 끝난 후 색 일괄 변경 클래스 설정
        -   `[필수]` index : 변결 될 따라 쓰기 인덱스 설정
        -   `[필수]` endFillStrokeClass : 변경 될 색상 클래스 설정

    ```javascript
    trace: {
        text: 'BAE',
        target: [
            { index: 0, endFillStrokeClass: 'fno s01' },
            { index: 1, endFillStrokeClass: 'fno s01' },
            { index: 2, endFillStrokeClass: 'fno s01' }
        ],
        scale: 2,
        gap: 0,
        offset: { x: 0, y: 0 },
        fillStrokeClass: 'fno s05',
        backgroundClass: 'f12',
        traceEndFillStrokeClass: {
            index: [0, 1, 2],
            fillStrokeClass: 'fno s14'
        }
    }
    ```

    <br />

> ## EM000005

    듣고 보기 선택하기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000005',
        directive: {
            text: 'Listen and choose.'
            // x: 70,
            // y: 50,
            // tts: {x: 30, y: 29}
        },
        main: {
            word: {
                text: 'b'
                // x: 400
                // y: 165
                // fontSize: 45
                // offset: { x: 0, y: 0}
                backgroundShape: {
                    circle: { cx: 400, cy: 165, radius: 50 },
                    shapeClass: 'f07'
                }
            },
            soundButton: {
                speakerImage: { imgUrl: 'images/E1speaker.svg', offset: { x: 7.5, y: -7.5 }, scale: 0.75 },
                soundUrl: 'sounds/duck.mp3',
                innerImage: { imgUrl: 'images/duck001.png', offset: { x: -50, y: 0 }, scale: 0.4 },
                innerText: {
                    text: 'duck',
                    offset: { x: 50, y: -5 }
                    // fill
                    // fontSize: 80
                }
            },
            onlySpeaker: {
                x: 400,
                y: 165,
                activeImgUrl: 'images/duck001.png',
                nonActiveImgUrl: 'images/bus001.png',
                scale: 1,
                soundUrl: 'sounds/bat.mp3'
            }
        },
        choiceActive: true,
        choice: [
            {
                speakerImage: {
                    imgUrl: 'images/E1speaker.svg',
                    offset: { x: 7.5, y: -7.5 },
                    scale: 0.75,
                    // offset: { x: 0, y: 0 },
                },
                innerImage: {
                    imgUrl: 'images/bat001.png',
                    scale: 0.45,
                    // scale: 1
                    // offset: {x: 0, y: 0}
                },
                soundUrl: 'sounds/bat.mp3',
                answer: true,
                // x: undefined
                // y: 320
                // width: 120
                // height: 100
                // answer: false
                // center: true
            }
        ],
        multiCheck: false
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000005';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` main | _`object`_

    중앙에 그려질 메인 설정

    -   `[옵션]` word : 원 안에 텍스트 타입

        -   `[필수]` text: text 설정
        -   `[옵션]` x : 중앙 텍스트 x 위치
        -   `[옵션]` y : 중앙 텍스트 y 위치
        -   `[옵션]` fontSize : 중앙 텍스트 사이즈
        -   `[옵션]` offset : 중앙 텍스트 x, y 위치 미세 설정
            -   x : 중앙 텍스트 offset x 값
            -   y : 중앙 텍스트 offset y 값
        -   `[옵션]` bold : 텍스트 굵기 설정
        -   `[옵션]` textClass : 텍스트 클래스 설정
        -   `[옵션]` backgroundShape : 텍스트 뒤 배경 모양 설정
            -   `[옵션]` circle : 원 그리기
                -   `[옵션]` cx : 원의 중심 x 위치 (기본: 텍스트 x 중앙)
                -   `[옵션]` cy : 원의 중심 y 위치 (기본: 텍스트 y 중앙)
                -   `[필수]` radius : 원의 반지름
            -   `[옵션]` rect : 사각형 그리기
                -   `[옵션]` x : 사각형의 x 위치 (기본: 텍스트 x 중앙)
                -   `[옵션]` y : 사각형의 y 위치 (기본: 텍스트 y 중앙)
                -   `[필수]` width : 사각형의 가로 길이
                -   `[필수]` height : 사각형의 세로 길이
                -   `[옵션]` roundedCornerX : 사각형 모서리의 가로 방향 라운드 x 값 (기본: 0)
                -   `[옵션]` roundedCornerY : 사각형 모서리의 세로 방향 라운드 y 값 (기본: roundedCornerX)
                -   `[옵션]` center : 사각형의 x, y를 중앙값으로 변경 (기본: true)
            -   `[옵션]` ellipse : 타원 그리기
                -   `[옵션]` cx : 타원의 중심 x 위치 (기본: 텍스트 x 중앙)
                -   `[옵션]` cy : 타원의 중심 y 위치 (기본: 텍스트 y 중앙)
                -   `[필수]` radiusX : 타원의 가로 방향 반지름 x 값
                -   `[필수]` radiusY : 타원의 세로 방향 반지름 y 값
            -   `[옵션]` shapeClass : 도형 클래스 설정

    -   `[옵션]` soundButton : 사운드 버튼 타입 (공통 속성 참조)
    -   `[옵션]` onlySpeaker : 스피커 이미지만 사용
        -   `[옵션]` x : 스피커 x 위치 설정
        -   `[옵션]` x : 스피커 x 위치 설정
        -   `[옵션]` activeImgUrl : 스피커 활성화 이미지 인덱스 설정
        -   `[옵션]` nonActiveImgUrl : 스피커 비활성화 이미지 인덱스 설정
        -   `[옵션]` scale : 이미지 스케일
        -   `[옵션]` soundUrl : 사운드 인덱스 설정

    ```javascript
    // DEFAULT
    main: {
        word: {
            text: 'b'
            // x: 400
            // y: 165
            // fontSize: 45
            // offset: { x: 0, y: 0}
            // bold: true,
            // textClass: ''
            backgroundShape: {
                circle: { cx: 400, cy: 165, radius: 50 },
                rect: { x: 400, y: 165, width: 50, height: 100, roundedCornerX: 10, roundedCornerY: 10 },
                ellipse: { cx: 400, cy: 165, radiusX: 50, radiusY: 50 },
                shapeClass: 'f08'
            }
        },
        soundButton: {
            speakerImage: { imgUrl: 'images/E1speaker.svg', offset: { x: 7.5, y: -7.5 }, scale: 0.75 },
            soundUrl: 'sounds/duck.mp3',
            innerImage: { imgUrl: 'images/duck001.png', offset: { x: -50, y: 0 }, scale: 0.4 },
            innerText: {
                text: 'duck',
                offset: { x: 50, y: -5 }
                // fill
                // fontSize: 80
            }
        },
        onlySpeaker: {
            x: 400,
            y: 165,
            activeImgUrl: 'images/duck001.png',
            nonActiveImgUrl: 'images/bus001.png',
            scale: 1,
            soundUrl: 'sounds/bat.mp3'
        }
    }
    ```

    <br />

-   > `[옵션]` choiceActive | _`boolean`_

    문항 시작시 초이스 버튼 선택 가능 여부 설정

    true : 문항 시작하면 바로 선택 가능  
    false : 사운드 재생 후 선택 가능

    ```javascript
    //DEFAULT
    choiceActive: true;
    ```

-   > `[필수]` choice | _`array[object]`_

    초이스 버튼 설정

    -   `[필수]` speakerImage : 스피커 이미지 설정
        -   `[필수]` imgUrl : 스피커 이미지 인덱스 설정
        -   `[필수]` scale : 스피커 이미지 사이즈
        -   `[옵션]` offset : 스피커 이미지 x, y 위치 미세 설정
            -   x : 스피커 이미지 offset x 값
            -   y : 스피커 이미지 offset y 값
    -   `[필수]` innerImage : 버튼 내부 이미지 설정
        -   `[필수]` imgUrl : 내부 이미지 인덱스 설정
        -   `[필수]` scale : 내부 이미지 사이즈
        -   `[옵션]` offset : 내부 이미지 x, y 위치 미세 설정
            -   x : 내부 이미지 offset x 값
            -   y : 내부 이미지 offset y 값
    -   `[필수]` soundUrl : 버튼 클릭 시 나올 사운드 인덱스 설정
    -   `[옵션]` answer: 정답 여부
    -   `[옵션]` x : 버튼 x 위치(지정 안할 시 자동으로 중앙 정렬)
    -   `[옵션]` y : 버튼 y 위치
    -   `[옵션]` width : 버튼 가로 크기
    -   `[옵션]` height : 버튼 세로 크기

    ```javascript
    // DEFAULT
    choice: [
        {
            speakerImage: {
                imgUrl: 'images/E1speaker.svg',
                offset: { x: 7.5, y: -7.5 },
                scale: 0.75
                // offset: { x: 0, y: 0 },
            },
            innerImage: {
                imgUrl: 'images/bat001.png',
                scale: 0.45
                // offset: { x: 0, y: 0 }
            },
            soundUrl: 'sounds/bat.mp3',
            answer: true
            // answer: false
            // x: undefined           // x값 미설정 시 자동으로 중앙 정렬 함
            // y: 320
            // width: 120
            // height: 100
        }
    ];
    ```

-   > `[필수]` multiCheck | _`boolean`_

    정답 다중 선택 여부 설정

    ```javascript
    //DEFAULT
    okButton: true;
    ```

<br />

> ## EM000006

    같은 단어 모두 고르기(카드 플립)

-   ### 기본 포맷

```javascript
    {
        questionType: 'EM000006',
        directive: { text: 'text_index_0' },
        background: {
            x: 210,
            y: 75,
            width: 380,
            height: 380,
            img: {
                imgUrl: 'image_index_0',
                sclae: 1,
                offset: { x: 0, y: 0 }
            },
            center: false,
            backgroundClass: 'f18'
        },
        card: {
            text: ['bat', 'cat', 'bat', 'bat'],
            fontSize: 50,
            flipDuration: 0.75,
            flippingHiddenRectClass: 'f04 s12',
            defaultClass: {
                card: ['f19 s19', 'f20 s20', 'f21 s21', 'f22 s22'],
                text: 'f02'
            },
            nonActiveClass: {
                card: 'f07',
                text: 'f01'
            }
        },
        nextFrameDelayTime: 1000
    }
```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000006';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` background | _`object`_

    백그라운드 배경 및 이미지 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` width : 가로 길이 설정
    -   `[필수]` height : 세로 길이 설정
    -   `[필수]` img : 이미지 설정
        -   `[필수]` imgUrl : 이미지 인덱스 설정
        -   `[필수]` scale : 스케일 설정
        -   `[필수]` offset : 이미지 위치 미세 조정
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
    -   `[옵션]` center : x, y를 중심으로 중앙 정렬
    -   `[필수]` backgroundClass : 백그라운드 색상 클래스 설정

    ```javascript
    background: {
        x: 210,
        y: 75,
        width: 380,
        height: 380,
        img: {
            imgUrl: 'image_index_0',
            sclae: 1,
            offset: { x: 0, y: 0 }
        },
        center: false,
        backgroundClass: 'f18'
    }
    ```

-   > `[옵션]` card | _`object`_

    카드 설정

    -   `[필수]` text : 텍스트 설정
    -   `[옵션]` textOffset : 텍스트 위치 미세 조정(카드 4개 일괄 조정 됨 / 기본: { x:0, y: 0})
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[필수]` fontSize : 폰트 사이즈 설정
    -   `[필수]` flipDuration : 플립 되는 시간 설정
    -   `[필수]` flippingHiddenRectClass : 플립 될시 배경이미지 가려주는 가림막 클래스 설정
    -   `[필수]` defaultClass : 기본 상태 클래스 설정
        -   `[필수]` card : 카드 클래스 설정
        -   `[필수]` text : 텍스트 클래스 설정
    -   `[필수]` nonActiveClass : 비활성화(오답) 상태 클래스 설정
        -   `[필수]` card : 카드 클래스 설정
        -   `[필수]` text : 텍스트 클래스 설정

    ```javascript
    card: {
        text: ['bat', 'cat', 'bat', 'bat'],
        fontSize: 50,
        flipDuration: 0.75,
        flippingHiddenRectClass: 'f04 s12',
        defaultClass: {
            card: ['f19 s19', 'f20 s20', 'f21 s21', 'f22 s22'],
            text: 'f02'
        },
        nonActiveClass: {
            card: 'f07',
            text: 'f01'
        }
    }
    ```

<br />

> ## EM000007

    듣기 후 쓰기

-   ### 기본 포맷

```javascript
    questionType: 'EM000007',
    directive: { text: 'Listen and write.' },
    soundButton: {
        x: 170,
        y: 210,
        width: 200,
        height: 180,
        center: true,
        soundUrl: 'sounds/bat.mp3',
        buttonClass: 'f02 s04',
        speakerImage: { imgUrl: 'images/E1speaker.svg', scale: 1 },
        innerImage: { imgUrl: 'images/bat001.png', scale: 0.7 },
        // hintOffset: { x: 80, y: 0 }
    },
    area: { x: 535, y: 210, width: 460, height: 180, roundedCornerX: 7.5, roundedCornerY: 7.5, areaClass: 'f06' },
    write: {
        answer: 'BAE',
        scale: 2,
        offset: { x: 0, y: 0 },
        gap: 0
        // writeClass: '',
        // okButtonPoint: { x: 400, y: 440 },
        // helpButtonOffset: { x: 0, y: 0 },
        // undoButtonOffset: { x: 0, y: 0 },
        // trashButtonOffset: { x: 0, y: 0 }
    }
}
```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000007';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` soundButton | _`object`_

    듣기 버튼 설정  
    자세한 내용은 공통 속성 참조

     <br />

-   > `[필수]` area | _`object`_

    따라쓰기 영역 설정

    -   `[필수]` x : 따라쓰기 영역 x 위치
    -   `[필수]` y : 따라쓰기 영역 y 위치
    -   `[필수]` width : 따라쓰기 영역 width
    -   `[필수]` height : 따라쓰기 영역 height
    -   `[옵션]` roundedCornerX : x 방향 라운드 값 설정 (기본: 0)
    -   `[옵션]` roundedCornerY : y 방향 라운드 값 설정 (기본: 0)
    -   `[옵션]` areaClass: areaClass 설정 (기본: '')

    ```javascript
    //DEDAULT
    area: {
        x: 535,
        y: 210,
        width: 460,
        height: 180,
        // roundedCornerX: 7.5,
        // roundedCornerY: 7.5,
        // areaClass: 'f06'
    },
    ```

    <br />

-   > `[필수]` write | _`object`_

    쓰기 설정

    -   `[필수]` answer : 정답 설정
    -   `[필수]` scale: 힌트 스케일 설정
    -   `[필수]` offset: 힌트 위치 미세 조정
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[필수]` okButtonPoint : 위치 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
    -   `[필수]` helpButtonOffset : help 버튼 미세 조정
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[필수]` undoButtonOffset : 하나 지우기 버튼 미세 조정
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[필수]` trashButtonOffset : 모두 지우기 버튼 미세 조정
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정

    ```javascript
    write: {
        answer: 'BAE',
        scale: 2,
        offset: { x: 0, y: 0 },
        gap: 0
        // writeClass: '',
        // okButtonPoint: { x: 400, y: 440 },
        // helpButtonOffset: { x: 0, y: 0 },
        // undoButtonOffset: { x: 0, y: 0 },
        // trashButtonOffset: { x: 0, y: 0 }
    }
    ```

<br />

> ## EM000008

    따라쓰기 후 듣기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000008',
        directive: { text: 'text_index_0' },
        soundUrl: 'sound_index_0',
        container: {
            x: 170,
            y: 210,
            width: 200,
            height: 180,
            center: true,
            buttonClass: 'f02 s04',
            innerImage: { imgUrl: 'image_index_0', scale: 0.7 }
        },
        area: { x: 535, y: 210, width: 460, height: 180, roundedCornerX: 7.5, roundedCornerY: 7.5, areaClass: 'f06' },
        trace: {
            text: 'BAE',
            target: [
                { index: 0, endFillStrokeClass: 'fno s01' },
                { index: 1, endFillStrokeClass: 'fno s01' },
                { index: 2, endFillStrokeClass: 'fno s01' }
            ],
            scale: 2,
            gap: 0,
            offset: { x: 0, y: 0 },
            fillStrokeClass: 'fno s05',
            backgroundClass: 'f12',
            traceEndFillStrokeClass: {
                index: [0, 1, 2],
                fillStrokeClass: 'fno s14'
            }
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000008';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` soundUrl | _`string`_

    사운드 인덱스 설정

    ```javascript
    soundUrl: 'sounds/bat.mp3',
    ```

    <br />

-   > `[필수]` container | _`object`_

    이미지 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` width : 가로 길이 설정
    -   `[필수]` height : 세로 길이 설정
    -   `[옵션]` center : x, y를 중심으로 중앙 정렬 (기본: true)
    -   `[필수]` buttonClass : 버튼 클래스 설정
    -   `[필수]` innerImage : 내부 이미지 설정
        -   `[필수]` imgUrl : 이미지 인덱스 설정
        -   `[필수]` scale : 이미지 스케일 설정

    ```javascript
    container: {
        x: 170,
        y: 210,
        width: 200,
        height: 180,
        // center: true,
        buttonClass: 'f02 s04',
        innerImage: { imgUrl: 'image_index_0', scale: 0.7 }
    }
    ```

    <br />

-   > `[필수]` area | _`object`_

    따라쓰기 영역 설정

    -   `[필수]` x : 따라쓰기 영역 x 위치
    -   `[필수]` y : 따라쓰기 영역 y 위치
    -   `[필수]` width : 따라쓰기 영역 width
    -   `[필수]` height : 따라쓰기 영역 height
    -   `[옵션]` roundedCornerX : x 방향 라운드 값 설정 (기본: 0)
    -   `[옵션]` roundedCornerY : y 방향 라운드 값 설정 (기본: 0)
    -   `[옵션]` areaClass: areaClass 설정 (기본: '')

    ```javascript
    //DEDAULT
    area: {
        x: 535,
        y: 210,
        width: 460,
        height: 180,
        // roundedCornerX: 7.5,
        // roundedCornerY: 7.5,
        // areaClass: 'f06'
    },
    ```

    <br />

-   > `[필수]` trace | _`array[object]`_

    따라쓰기 설정

    -   `[필수]` text : 텍스트 설정
    -   `[필수]` target : 따라 쓰기 할 텍스트 설정
        -   `[필수]` index : 따라 쓰기 할 인덱스 설정
        -   `[필수]` endFillStrokeClass : 따라 쓰기 끝난 후 바뀔 색 클래스 설정
    -   `[필수]` scale : 스케일 설정
    -   `[필수]` gap : 글자간 간격 설정
    -   `[옵션]` offset : 따라 쓰기 글자 위치 미세 조정 (기본: {x: 0, y: 0})
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[옵션]` fillStrokeClass : 따라 쓰기 동안 채워지는 색 클래스 설정 (기본: '')
    -   `[옵션]` backgroundClass : 따라 쓰기 배경색 설정 (기본: 'fno sE1lightgray')
    -   `[옵션]` traceEndFillStrokeClass : 따라 쓰기 끝난 후 색 일괄 변경 클래스 설정
        -   `[필수]` index : 변결 될 따라 쓰기 인덱스 설정
        -   `[필수]` endFillStrokeClass : 변경 될 색상 클래스 설정

    ```javascript
    trace: {
        text: 'BAE',
        target: [
            { index: 0, endFillStrokeClass: 'fno s01' },
            { index: 1, endFillStrokeClass: 'fno s01' },
            { index: 2, endFillStrokeClass: 'fno s01' }
        ],
        scale: 2,
        gap: 0,
        offset: { x: 0, y: 0 },
        fillStrokeClass: 'fno s05',
        backgroundClass: 'f12',
        traceEndFillStrokeClass: {
            index: [0, 1, 2],
            fillStrokeClass: 'fno s14'
        }
    }
    ```

    <br />

<br />

> ## EM000009

    step1) 듣고 따라쓰기
    step2) 듣고 따라쓰기
    step3) 듣고 쓰기

-   ### 기본 포맷

```javascript
{
    questionType: 'EM000009',
    directive: { text: 'text_index_0'},
    soundButton: {
        soundUrl: 'sound_index_0',
        speakerImage: { imgUrl: 'image_index_0', scale: 1 },
        innerImage: { imgUrl: 'imgae_index_1', scale: 0.7 }
    },
    learningWord: 'baa',
    area: {
        x: 535,
        y: 210,
        width: 460,
        height: 180,
        roundedCornerX: 7.5,
        roundedCornerY: 7.5,
        areaClass: ''
    },
    step1: {
        trace: [{ index: 0, endFillStrokeClass: 'fno s01' }],
        scale: 2,
        gap: 0,
        offset: { x: 0, y: 0 },
        fillStrokeClass: 'fno s05',
        backgroundClass: undefined,
        traceEndFillStrokeClass: {
            index: [0, 1],
            fillStrokeClass: 'fno s08'
        }
    },
    step2: {
        trace: [
            { index: 0, endFillStrokeClass: 'fno s01' },
            { index: 1, endFillStrokeClass: 'fno s01' }
        ],
        scale: 2,
        gap: 0,
        offset: { x: 0, y: 0 },
        fillStrokeClass: 'fno s05',
        backgroundClass: undefined,
        traceEndFillStrokeClass: {
            index: [0],
            fillStrokeClass: 'fno sE1red'
        }
    },
    step3: {
        scale: 2,
        offset: { x: 0, y: 0 },
        gap: 0,
        writeClass: '',
        answer: 'baB',
        okButtonPoint: { x: 400, y: 440 },
        helpButtonOffset: { x: 0, y: 0 },
        undoButtonOffset: { x: 0, y: 0 },
        trashButtonOffset: { x: 0, y: 0 }
    },
    // tryCount: 5
}
```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000009';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정 (자세한 내용은 하단의 모듈 내 사용되는 공통 속성 참고)

    <br />

-   > `[필수]` soundButton | _`object`_

    듣기 버튼 설정  
    (자세한 내용은 하단의 모듈 내 사용되는 공통 속성 참고)

    <br />

-   > `[필수]` learningWord | _`string`_

    따라쓰기 및 쓰기 단어 설정

    ```javascript
    learningWord: 'bat',
    ```

-   > `[옵션]` area | _`object`_

    따라쓰기 및 쓰기 영역 설정

    -   `[필수]` x : 따라쓰기 및 쓰기 영역 x 위치
    -   `[필수]` y : 따라쓰기 및 쓰기 영역 y 위치
    -   `[필수]` width : 따라쓰기 및 쓰기 영역 width
    -   `[필수]` height : 따라쓰기 및 쓰기 영역 height
    -   `[옵션]` roundedCornerX : 모서리 라운드 x방향 라운드 값 (기본: 0)
    -   `[옵션]` roundedCornerY : 모서리 라운드 y방향 라운드 값 (기본: 0)
    -   `[옵션]` center : x, y를 중심으로 중앙 정렬(기본: true)
    -   `[옵션]` areaClass : 따라쓰기 맟 쓰기 영역 클래스 설정

    ```javascript
    //DEDAULT
    area: {
        x: 535,
        y: 210,
        width: 460,
        height: 180,
        // roundedCornerX: 0,
        // roundedCornerY: 0,
        // center: true
        // areaClass: ''
    }
    ```

    <br />

-   > `[필수]` step1 | _`object`_

    step1 따라쓰기 설정  
    step2도 step1과 동일

    -   `[필수]` trace : 따라 쓰기 설정
        -   `[필수]` index : learningWord에서 따라 쓰기 할 인덱스 설정(0부터 시작)
        -   `[필수]` endFillStrokeClass: 따라 쓰기가 끝난 후 변경할 색상 클래스 설정
    -   `[필수]` scale : 크기 설정
    -   `[필수]` gap : 글자 사이 간격 설정
    -   `[필수]` offset : 따라 쓰기 위치 미세 조정 (기본: area 중앙)
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[옵션]` fillStrokeClass : 따라 쓰기 중 채워질 색상 클래스 설정 (기본: '')
    -   `[옵션]` backgroundClass : 따라 쓰기 배경 색상 클래스 설정 (기본: '')
    -   `[필수]` traceEndFillStrokeClass : 모든 따라 쓰기가 끝난 후 변경 될 색상 설정
        -   `[필수]` index : 변경 될 trace 인덱스 설정
        -   `[필수]` fillStrokeClass: 변경 될 색상 클래스 설정

    ```javascript
    step1: {
        trace: [{ index: 0, endFillStrokeClass: 'fno s01' }],
        scale: 2,
        gap: 0,
        offset: { x: 0, y: 0 },
        fillStrokeClass: '',
        // backgroundClass: '',
        traceEndFillStrokeClass: {
            index: [0, 1],
            fillStrokeClass: 'fno s08'
        }
    }
    ```

-   > `[필수]` step3 | _`object`_

    쓰기 설정

    -   `[필수]` scale : 쓰기 스케일 설정
    -   `[옵션]` offset : help text 미세 조정(기본: {x:0, y: 0})
        -   `[필수]` x : help text offset x값
        -   `[필수]` y : help text offset y값
    -   `[필수]` gap : help text 간격 설정
    -   `[필수]` writeClass : 쓰여지는 패스 클래스 설정
    -   `[옵션]` answer: 정답 설정 (기본 : learningWord)
    -   `[필수]` okButtonPoint : ok 버튼 위치 설정
        -   `[필수]` x : ok 버튼 x값
        -   `[필수]` y : ok 버튼 y값
    -   `[옵션]` helpButtonOffset : help 버튼 offset 설정(기본: {x: 0, y: 0})
        -   `[필수]` x : help 버튼 x값
        -   `[필수]` y : help 버튼 y값
    -   `[옵션]` undoButtonOffset : undo 버튼 offset 설정(기본: {x: 0, y: 0})
        -   `[필수]` x : undo 버튼 x값
        -   `[필수]` y : undo 버튼 y값
    -   `[옵션]` trashButtonOffset : trash 버튼 offset 설정(기본: {x: 0, y: 0})
        -   `[필수]` x : trash 버튼 x값
        -   `[필수]` y : trash 버튼 y값

    ```javascript
    step3: {
        scale: 2,
        offset: { x: 0, y: 0 },
        gap: 0,
        writeClass: '',
        // answer: 'baB',
        okButtonPoint: { x: 400, y: 440 },
        // helpButtonOffset: { x: 0, y: 0 },
        // undoButtonOffset: { x: 0, y: 0 },
        // trashButtonOffset: { x: 0, y: 0 }
    }
    ```

-   > `[옵션]` tryCount | _`number`_

    쓰기 시도 횟수 설정  
    미 설정시 3회

    ```javascript
    // tryCount: 3
    ```

<br />

> ## EM000010

    듣고 알파벳 선택(드래그&드랍)

-   ### 기본 포맷
    ```javascript
    {
        questionType: 'EM000010',
        directive: { text: 'text_index_0' },
        soundButton: {
            soundUrl: 'sound_index_0',
            innerImage: { imgUrl: 'image_index_0', scale: 0.5 }
        },
        hintCount: 1,
        dragAndDrop: {
            drag: {
                area: { areaClass: 'f02' },
                common: {
                    fontSize: 50,
                    imgScale: 1,
                    textOffset: { x: 0, y: 11 },
                    imgOffset: { x: 0, y: 11 },
                    textClass: 'f02',
                    gap: 20
                },
                items: [
                    //sneakers
                    {
                        text: 's',
                        activeImgUrl: 'image_index_1',
                        answerIndex: 0,
                        textOffset: { x: 0, y: 0 }
                    },
                    {
                        text: 'n',
                        activeImgUrl: 'image_index_2'
                    },
                    {
                        text: 'k',
                        activeImgUrl: 'image_index_3'
                        answerIndex: 4
                    }
                ]
            },
            drop: {
                x: 400,
                y: 350,
                centerX: true,
                common: {
                    fontSize: 50,
                    imgScale: 1,
                    textOffset: { x: 0, y: 0 },
                    imgOffset: { x: -25, y: 0 },
                    textClass: 'f02'
                },
                items: [
                    {
                        text: 's',
                        activeImgUrl: 'image_index_6',
                        textOffset: { x: 0, y: -11 }
                    },
                    {
                        text: 'n',
                        activeImgUrl: 'image_index_3'
                    },
                    {
                        text: 'e',
                        activeImgUrl: 'image_index_3'
                    },
                    {
                        text: 'a',
                        activeImgUrl: 'image_index_3'
                    },
                    {
                        activeImgUrl: 'image_index_7'
                    },
                    {
                        text: 'e',
                        activeImgUrl: 'image_index_3'
                    },
                    {
                        text: 'r',
                        activeImgUrl: 'image_index_3'
                    },
                    {
                        text: 's',
                        activeImgUrl: 'image_index_5'
                    }
                ]
            }
        }
    }
    ```
-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000010';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` soundButton | _`object`_

    듣기 버튼 설정  
    (자세한 내용은 하단의 모듈 내 사용되는 공통 속성 참고

    <br />

-   > `[옵션]` dragActive : _`boolean`_

    문항 시작시 드래그 가능 여부 설정

    true : 문항 시작하면 바로 드래그 가능  
    false : 사운드 재생 후 드래그 가능

    ```javascript
    // DEFAULT
    dragActive: true;
    ```

    <br />

-   > `[필수]` drag | _`object`_

    드래그 설정

    정답은 자동으로 설정 drop속성의 타겟 텍스트와 drag의 text가 일치할 경우 정답

    -   `[옵션]` area : 백그라운드 설정
        -   `[필수]` x : 백그라운드 x 위치
        -   `[필수]` y : 백그라운드 y 위치
        -   `[필수]` width : 백그라운드 가로 길이
        -   `[필수]` height : 백그라운드 세로 길이
    -   `[필수]` items : 드래그 아이템 설정
        -   `[필수]` text : text 설정
        -   `[옵션]` endColor : 정답 후 변경될 색 설정
        -   `[옵션]` fontSize : 텍스트 크기 설정
        -   `[옵션]` textOffset : text 위치 미세 조정 (기본 드래그 영역 중앙)
            -   `[필수]` x : text offset x 값
            -   `[필수]` y : text offset y 값
        -   `[옵션]` x : 드래그 영역 x 위치
        -   `[옵션]` y : 드래그 영역 y 위치
        -   `[옵션]` width : 드래그 영역 가로 길이
        -   `[옵션]` height : 드래그 영역 세로 길이
        -   `[옵션]` fill : 드래그 영역 내부 색 설정

    ```javascript
    drag: {
        area: { x: 400, y: 360, width: 600, height: 165 },
        items: [
            {
                text: 'b',
                endColor: 'red'
                // endPoint: { x: 0, y: 0 }
                // fontSize: 65
                // textOffset: {x: 0, y: 0}
                // x
                // y: 360
                // width: 125
                // height: 110
                // fill
            }
        ]
    }
    ```

    <br />

-   > `[필수]` drop | _`object`_

    drop 설정

    -   `[필수]` text : text 설정
    -   `[필수]` target : 정답 알파벳 설정(target으로 설정 된 알파벳은 네모 모양으로 바뀜)
    -   `[옵션]` textOffset : 네모 모양 이외의 알파벳 위치 미세 조정
        -   `[필수]` x : 알파벳 offset x 값
        -   `[필수]` y : 알파벳 offset y 값
    -   `[옵션]` x : drop 영역 x 위치
    -   `[옵션]` y : drop 영역 y 위치
    -   `[옵션]` fontSize : 텍스트 크기 설정
    -   `[옵션]` boxWidth : 네모 모양 가로 길이
    -   `[옵션]` boxHeight : 네모 모양 세로 길이

    ```javascript
    drop: {
        text: 'bat',
        target: 'b'
        // textOffset: { x: 0, y: 10 }
        // x
        // y
        // fontSize
        // boxWidth
        // boxHeight
    }
    ```

<br />

> ## EM000011

    듣고 보기 선택하기 (O, X)

-   ### 기본 포맷

```javascript
    EM000011: {
        questionType: 'EM000011',
        directive: { text: 'Listen and Choose. Are the begging sounds of the word same?' },
        soundButton1: {
            soundUrl: 'sounds/bat.mp3',
            speakerImage: { imgUrl: 'images/E1speaker.svg' },
            innerImage: { imgUrl: 'images/bat001.png', scale: 0.6 }
        },
        soundButton2: {
            soundUrl: 'sounds/bus.mp3',
            speakerImage: { imgUrl: 'images/E1speaker.svg' },
            innerImage: { imgUrl: 'images/bus001.png', scale: 0.6 }
        },
        // choiceActive: false,
        choiceButton1: {
            innerText: {
                text: 'O',
                offset: { x: 0, y: -10 }
            },
            answer: true
        },
        choiceButton2: {
            innerText: {
                text: 'X',
                offset: { x: 0, y: -10 }
            }
        }
    }
```

-   > `[필수]` directive | _`object`_

    지시문 설정 (자세한 내용은 하단의 모듈 내 사용되는 공통 속성 참고)

    ```javascript
    directive: {
        text: 'Listen and Choose. Are the begging sounds of the word same?';
    }
    ```

    <br />

-   > `[필수]` soundButton1 | _`object`_

    왼쪽 사운드 버튼 설정 (자세한 내용은 하단의 공통 속성 soundButoon 참고)  
    soundButton2도 soundButto1과 같음

    ```javascript
    soundButton1: {
        soundUrl: 'sounds/bat.mp3',
        speakerImage: { imgUrl: 'images/E1speaker.svg' },
        innerImage: { imgUrl: 'images/bat001.png', scale: 0.6 }
    }
    ```

    <br />

-   > `[옵션]` choiceActive

    문항 시작시 초이스 버튼 선택 가능 여부 설정

    true : 문항 시작하면 바로 선택 가능  
    false : 사운드 재생 후 선택 가능

    ```javascript
    choiceActive: true;
    ```

    <br />

-   > `[필수]` choiceButton1

    초이스 버튼 설정 choiceButton2도 choiceButton1과 동일

    -   `[필수]` innerText : 텍스트 설정
        -   `[필수]` text : 텍스트 설정
        -   `[옵션]` offset : 텍스트 위치 조정
            -   `[필수]` x : offset x 값
            -   `[필수]` y : offset y 값

    ```javascript
    choiceButton1: {
        innerText: {
            text: 'O',
            offset: { x: 0, y: -10 }
        },
        answer: true
    },
    ```

<br />

> ## EM000012

    대소문자 찾기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000012',
        directive: { text: `text_index_0`, highlightClass: 'fE1red' },
        mainImage: { x: 200, y: 270, scale: 1.5, imgUrl: 'image_index_0' },
        choiceItem: {
            x: 600,
            y: 270,
            gap: { x: 100, y: 80 },
            img: { imgUrl: 'image_index_1', scale: 0.5 },
            text: {
                word: ['A', 'B', 'C', 'A', 'A', 'a', 'b', 'b', 'a'],
                fontSize: 50,
                textClass: 'f02',
                offset: { x: 0, y: 0 }
            },
            answer: ['A', 'a'],
            endPoint: {
                gap: { x: 100, y: 80 },
                offset: {
                    left: [
                        { x: 10, y: 0 }
                    ],
                    right: [
                        { x: 50, y: 0 }
                    ]
                }
            },
            hintOffset: { x: 10, y: 0 }
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000012';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` mainImage | _`object`_

    메인 이미지 설정

    -   `[필수]` x : 이미지 x 위치
    -   `[필수]` y : 이미지 y 위치
    -   `[필수]` scale : 이미지 스케일 설정
    -   `[필수]` imgUrl : 이미지 인덱스 설정
    -   `[옵션]` center : 이미지를 x, y 중심으로 중앙 정렬 (기본: true)

    ```javascript
    mainImage: {
        x: 200,
        y: 270,
        scale: 1.5,
        imgUrl: 'image_index_0',
        // center: true
    }
    ```

-   > `[필수]` choiceItem | _`object`_

    초이스 설정

    -   `[필수]` x : 초이스 x 위치 설정
    -   `[필수]` y : 초이스 y 위치 설정
    -   `[필수]` rows : 행 개수 설정
    -   `[필수]` columns : 열 개수 설정
    -   `[필수]` gap : 이미지간 간격 설정
        -   `[옵션]` x : x 방향 간격 설정
        -   `[옵션]` y : y 방향 간격 설정
    -   `[필수]` img : 이미지 설정
        -   `[필수]` imgUrl : 이미지 인덱스 설정
        -   `[필수]` scale : 이미지 스케일 설정
    -   `[필수]` text : 이미지 내부 텍스트 설정
        -   `[필수]` word : 텍스트 설정
        -   `[필수]` fontSize : 폰트 사이즈 설정
        -   `[필수]` textClass : 텍스트 클래스 설정
        -   `[옵션]` offset : 텍스트 위치 미세 조정
            -   `[필수]` x : 텍스트 offset x 값
            -   `[필수]` y : 텍스트 offset y 값
    -   `[필수]` answer : 정답 설정
    -   `[옵션]` endPoint : 이동되고 난 후 이미지 설정
        -   `[옵션]` gap : 이미지 간격 설정 (기본: chiceItem.gap)
            -   `[필수]` x : x 방향 간격 설정
            -   `[필수]` y : y 방향 간격 설정
        -   `[옵션]` offset : 이동 후 이미지 위치 미세 조정
            -   `[필수]` left : 왼쪽 (대문자) 위치 조정(학습자가 누른 순서대로 위치 조정 받음) (기본 {x: 0, y: 0})
                -   `[필수]` x : offset x 값 설정
                -   `[필수]` y : offset y 값 설정
            -   `[필수]` right : 오른쪽 (소문자) 위치 조정(학습자가 누른 순서대로 위치 조정 받음) (기본 {x: 0, y: 0})
                -   `[필수]` x : offset x 값 설정
                -   `[필수]` y : offset y 값 설정
    -   `[옵션]` hintOffset : 힌트 위치 설정 (기본: { x:0, y: 0 })
        -   `[필수]` x : 힌트 offset x 값
        -   `[필수]` y : 힌트 offset y 값
    -   `[옵션]` center : x, y를 중앙으로 초이스 전체 이동 시킴 (기본: true)

    ```javascript
    choiceItem: {
        x: 600,
        y: 270,
        rows: 4
        columns:2
        gap: { x: 100, y: 80 },
        img: { imgUrl: 'image_index_1', scale: 0.5 },
        text: {
            word: ['A', 'B', 'C', 'A', 'A', 'a', 'b', 'b', 'a'],
            fontSize: 50,
            textClass: 'f02',
            offset: { x: 0, y: 0 }
        },
        answer: ['A', 'a'],
        // endPoint: {
            // gap: gap
            // offset: {
            //     left: [
            //         { x: 10, y: 0 }
            //     ],
            //     right: [
            //         { x: 50, y: 0 }
            //     ]
            // }
        // },
        // hintOffset: { x: 0, y: 0 },
        // center: true
    }
    ```

<br />

> ## EM000013

    대소문자 따라 쓰기
    대문자부터 따라 쓰고 소문자 따라쓰기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000013',
        directive: { text: 'text_index_0' },
        learningWord: 'A',
        soundButton: {
            x: 400,
            y: 180,
            width: 220,
            height: 150,
            buttonClass: 'f07',
            soundUrl: 'sound_index_0',
            speakerImage: { imgUrl: 'image_index_0', scale: 1 },
            innerImage: { imgUrl: 'image_index_1', scale: 0.8, offset: { x: 0, y: 0 } },
            hintOffset: { x: 85, y: 0 }
        },
        upperCase: {
            x: 250,
            y: 325,
            scale: 1.5,
            line: true,
            centerX: true
        },
        lowerCase: {
            x: 550,
            y: 325,
            scale: 1.5,
            line: true,
            centerX: true
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000013';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` learningWord | _`string`_

    학습 단어 설정  
    대소문자 상관없이 알파벳 설정

    ```javascript
    learningWord: 'A'; // or 'a'
    ```

    <br />

-   > `[필수]` soundButton | _`object`_

    사운드 버튼 설정  
    자세한 내용은 공통 속성 참조 hintOffset 설정 시 사운드 버튼 눌러야 트레이스 진행  
    미설정시 바로 trace 진행

    <br />

-   > `[필수]` upperCase | _`object`_

    대문자 따라 쓰기 설정

    -   `[필수]` x : 대문자 따라 쓰기 x 위치 설정
    -   `[필수]` y : 대문자 따라 쓰기 y 위치 설정
    -   `[필수]` scale : 대문자 따라 쓰기 scale 설정
    -   `[옵션]` line : 보조선 표시 설정
    -   `[옵션]` centerX : x를 중심으로 이동

    ```javascript
    upperCase: {
        x: 250,
        y: 325,
        scale: 1.5,
        line: true,
        centerX: true
    }
    ```

    <br />

-   > `[필수]` lowerCase | _`object`_

    소문자 따라 쓰기 설정 upperCase와 속성 동일

    ```javascript
    lowerCase: {
        x: 250,
        y: 325,
        scale: 1.5,
        line: true,
        centerX: true
    }
    ```

    <br />

> ## EM000014

    대소문자 형태 확인

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000014',
        directive: { text: 'text_index_0' },
        hintCount: 1,
        hintOffset: [
            { index: 0, start: { x: 0, y: 20 }, end: { x: 0, y: 0 } },
            { index: 1, start: { x: 0, y: 20 }, end: { x: 0, y: 0 } },
            { index: 2, start: { x: 0, y: 20 }, end: { x: 0, y: 0 } }
        ],
        dragAndDrop: {
            drag: {
                common: {
                    fontSize: 80,
                    textClass: 'f01',
                    textShadow: true,
                    centerX: true
                },
                items: [
                    {
                        x: 155,
                        y: 160,
                        text: 'a',
                        soundUrl: 'sound_index_0',
                        answerIndex: 0
                    },
                    {
                        x: 155,
                        y: 300,
                        text: 'B',
                        soundUrl: 'sound_index_1',
                        answerIndex: 1
                    },
                    {
                        x: 155,
                        y: 420,
                        text: 'c',
                        soundUrl: 'sound_index_2',
                        answerIndex: 2
                    }
                ]
            },
            drop: {
                common: {
                    fontSize: 35,
                    textClass: 'f005',
                    centerX: true,
                    extraTextClass: 'f01',
                    circle: { radius: 40, offset: { x: 0, y: 0 }, class: 'f02' }
                },
                items: [
                    {
                        x: 500,
                        y: 100,
                        text: 'a',
                        extra: {
                            position: 'pre',
                            text: 'A',
                            offset: { x: 0, y: 0 },
                            class: 'f01'
                        },
                        circle: { class: 'f02', attribute: { opacity: 0.5 } }
                    },
                    {
                        x: 500,
                        y: 250,
                        text: 'B',
                        extra: {
                            text: 'b',
                            offset: { x: 0, y: 0 },
                            class: 'f01'
                        },
                        circle: { attribute: { opacity: 0.5 } }
                    },
                    {
                        x: 500,
                        y: 400,
                        text: 'c',
                        extra: {
                            position: 'pre',
                            text: 'C',
                            offset: { x: 0, y: 0 },
                            class: 'f01'
                        },
                        circle: { attribute: { opacity: 0.5 } }
                    }
                ]
            }
        },
        createElement: {
            image: [{ x: 550, y: 270, scale: 1, imgUrl: 'image_index_0' }],
            shape: [{ type: 'rect', x: 80, y: 80, width: 150, height: 380, center: false, shapeClass: 'f02' }]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000014';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` mainImage | _`object`_

    -   `[필수]` imgUrl : 이미지 인덱스 설정
    -   `[필수]` scale : 이미지 스케일 설정
    -   `[필수]` x : 이미지 위치 설정
    -   `[필수]` y : 이미지 위치 설정
    -   `[옵션]` center: 이미지 x, y를 중앙값으로 바꿈

    ```javascript
    mainImage: {
        imgUrl: 'image_index_0',
        scale: 1,
        x: 500,
        y: 270,
        // center: true
    },
    ```

-   > `[필수]` dragAndDrop | _`object`_

    -   `[필수]` dragArea : 드래그 레이아웃 영역 설정
        -   `[필수]` x :
        -   `[필수]` y :
        -   `[필수]` width :
        -   `[필수]` height :
        -   `[필수]` areaClass :
        -   `[옵션]` center : x, y를 중앙값으로 바꿈
    -   `[필수]` item1 : 드래그 아이템 설정

        -   `[필수]` drag : 드래그 설정
            -   `[필수]` text : 텍스트 설정
            -   `[필수]` textClass : 텍스트 클래서 설정
            -   `[필수]` fontSize : 폰트 사이즈 설정
            -   `[필수]` offset : 텍스트 위치 미세조정 (기본: dragAread의 상단 1/3 지점)
                -   `[필수]` x : 텍스트 offset x값
                -   `[필수]` y : 텍스트 offset y값
        -   `[필수]` drop : 드롭 설정
            -   `[필수]` x : 드롭 x 위치 설정
            -   `[필수]` y : 드롭 y 위치 설정
            -   `[옵션]` text : 텍스트 설정 (기본: drag.text)
            -   `[필수]` textClass : 텍스트 클래스 설정
            -   `[필수]` fontSize : 폰트 사이즈 설정
        -   `[필수]` soundUrl : 드래그 완료 시 재생될 사운드 인덱스 설정
        -   `[옵션]` hint : 힌트 설정 (hint : false 시 힌트 나오지 않음)
            -   `[필수]` startOffset
                -   `[필수]` x : startOffset offset x값
                -   `[필수]` y : startOffset offset y값
            -   `[필수]` endOffset
                -   `[필수]` x : endOffset offsest x값
                -   `[필수]` y : endOffset offset y값

    -   `[필수]` itme2 : 드래그 아이템 설정 (세부 속성은 item1과 동일)

    ```javascript
    dragAndDrop: {
        dragArea: { x: 155, y: 270, width: 150, height: 300, areaClass: 'f09' },
        item1: {
            drag: {
                text: 'A',
                textClass: 'fE1red sE1red',
                fontSize: 80,
                offset: { x: 0, y: 0 }
            },
            drop: {
                x: 500,
                y: 200,
                // text: 'A',
                textClass: '',
                fontSize: 60
            },
            soundUrl: 'sound_index_0',
            hint: { startOffset: { x: 0, y: 0 }, endOffset: { x: 0, y: 0 } }
        },
        item2: {
            drag: {
                text: 'a',
                textClass: 'fE1gold sE1gold',
                fontSize: 80,
                offset: { x: 0, y: 0 }
            },
            drop: {
                x: 400,
                y: 300,
                text: 'a',
                textClass: '',
                fontSize: 60
            },
            soundUrl: 'sound_index_1',
            hint: { startOffst: { x: 0, y: 0 }, endOffset: { x: 0, y: 0 } }
        }
    }
    ```

<br />

> ## EM000015

    대소문자 형태 확인

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000015',
        directive: { text: 'text_index_0' },
        learningWord: 'A',
        step1: {
            word: {
                x: 400,
                y: 170,
                scale: 5,
                backgroundClass: 'f10',
                fillStrokeClass: 'fno s11',
                centerX: true,
                animateDuration: 1,
                blink: { repeatCount: 1, interval: 0.3, duration: 0.5 },
                translateX: -140,
                translateDuration: 0.8
            },
            hintOffset: { x: 0, y: -30 },
            soundUrl: 'sound_index_0'
        },
        step2: {
            x: 440,
            y: 170,
            scale: 5,
            translateX: -280,
            translateDuration: 0.8,
            backgroundClass: 'f10',
            fillStrokeClass: 'fno s006',
            try: { x: 630, y: 75, count: 3, gap: 30, scale: 1.5 },
            soundUrl: 'sound_index_0'
        },
        step3: {
            x: 160,
            y: 170,
            scale: 5,
            text: 'Apple',
            textClass: 'f01',
            fontSize: 150,
            textOffset: [{ index: 1, x: 0, y: 0 }],
            backgroundClass: 'f10',
            fillStrokeClass: 'fno s006',
            soundUrl: 'sound_index_0',
            traceIndex: 0,
            try: {
                x: 650,
                y: 100,
                gap: 30,
                count: 3
            }
        },
        createElement: {
            shape: [{ order: 0, type: 'rect', x: 400, y: 265, center: true, shapeClass: 'f02', height: 250, width: 640, shadow: true }]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000015';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` learningWord | _`string`_

    학습 단어 설정

    ```javascript
    learningWord: 'A';
    ```

    <br />

-   > `[필수]` soundUrl | _`string`_

    사운드 인덱스 설정

    ```javascript
    soundUrl: 'sound_index_0';
    ```

    <br />

-   > `[필수]` step1 | _`object`_

    애니메이션 설정

    -   `[필수]` word : 애니메이션 될 단어 설정
        -   `[필수]` x : 단어 x 위치 설정
        -   `[필수]` y : 단어 y 위치 설정
        -   `[필수]` scale : 단어 scale 설정
        -   `[필수]` backgroundClass : 애니메이션 시작 전 배경 색 설정
        -   `[필수]` fillStrokeClass : 애니메이션 시작 시 칠해지는 색 설정
    -   `[필수]` retry : 다시하기 이미지 설정
        -   `[필수]` imgUrl : 이미지 인덱스 설정
        -   `[필수]` x : 이미지 x 위치 설정
        -   `[필수]` y : 이미지 y 위치 설정
        -   `[필수]` scale : 이미지 scale 설정
    -   `[필수]` end : 종료 이미지 설정
        -   `[필수]` imgUrl : 이미지 인덱스 설정
        -   `[필수]` x : 이미지 x 위치 설정
        -   `[필수]` y : 이미지 y 위치 설정
        -   `[필수]` scale : 이미지 scale 설정
    -   `[필수]` hintOffset : 힌트 위치 미세 조정
        -   `[필수]` x : 힌트 offsest x값 설정
        -   `[필수]` y : 힌트 offsest y값 설정

    ```javascript
    step1: {
        word: {
            x: 400,
            y: 135,
            scale: 2.5,
            backgroundClass: 'f10',
            fillStrokeClass: 's11'
        },
        retry: {
            imgUrl: 'image_index_0',
            x: 350,
            y: 420,
            scale: 0.7
        },
        end: {
            imgUrl: 'image_index_1',
            x: 450,
            y: 420,
            scale: 0.7
        },
        hintOffset: { x: 0, y: 15 }
    }
    ```

    <br />

-   > `[필수]` step2 | _`object`_

        따라쓰기 설정

        -   `[옵션]` x : 단어 x 위치 설정 (기본: step1과 동일한 설정)
        -   `[옵션]` y : 단어 y 위치 설정 (기본: step1과 동일한 설정)
        -   `[옵션]` scale : 단어 scale 설정 (기본: step1과 동일한 설정)
        -   `[옵션]` backgroundClass : 애니메이션 시작 전 배경 색 설정 (기본: step1과 동일한 설정)
        -   `[옵션]` fillStrokeClass : 애니메이션 시작 시 칠해지는 색 설정 (기본: step1과 동일한 설정)
        -   `[옵션]` dragElOffset : 드래그 요소 위치 미세 조정
            -   `[필수]` x : 드래그 요소 offset x 값
            -   `[필수]` y : 드래그 요소 offset y 값
        -   `[필수]` tryCount : 따라쓰기 시도 횟수 설정

        ```javascript
        step2: {
            x: 400,
            y: 135,
            scale: 2.5,
            backgroundClass: 'f10',
            fillStrokeClass: 's11',
            dragElOffset: [{ x: 0, y: 0 }],
            tryCount: 2,
        }
        ```

    <br />

> ## EM000016

    단어 속 레터 쓰기

-   ### 기본 포맷

    ```javascript
    questionType: 'EM000016',
    directive: { text: 'text_index_0' },
    learningWord: {
        text: 'Apple',
        x: 300,
        y: 385,
        // gap: 0,
        scale: 2.5,
        fontSize: 50,
        trace: {
            index: 0,
            // offset: { x: 0, y: 0 },
            endFillStrokeClass: 'fno sE1gold',
            backgroundClass: 'fE1lightgray sno',
            fillStrokeClass: 'fno s10'
        },
        soundUrl: 'sound_index_0'
    },
    soundButton: {
        x: 80,
        y: 120,
        width: 180,
        height: 280,
        buttonClass: 'f07',
        soundUrl: 'sounds/bat.mp3',
        speakerImage: { imgUrl: 'images/E1speaker.svg', scale: 1 },
        innerImage: { imgUrl: 'images/bat001.png', scale: 0.8, offset: { x: 0, y: 30 } },
        // hintOffset: { x: 70, y: 0 }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000016';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` learningWord | _`object`_

    학습 단어 설정

    -   `[필수]` text : 텍스트 설정
    -   `[필수]` x : 텍스트 x 위치 설정
    -   `[필수]` y : 텍스트 y 위치 설정
    -   `[옵션]` gap : 텍스트 문자간 간격 설정 (기본: 0)
    -   `[필수]` scale : trace 스케일 설정
    -   `[필수]` fontSize : trace외 텍스트 폰트 사이즈 설정
    -   `[필수]` trace: 설정
        -   `[필수]` index : text 설정 단어 중 trace할 단어 인덱스 설정(앞에서부터 0, 1, 2 ...)
        -   `[옵션]` offset : 트레이스 위치 offset 설정 (기본: {x: 0, y: 0})
            -   `[필수]` x : 트레이스 offsest x 위치 설정
            -   `[필수]` y : 트레이스 offsest y 위치 설정
        -   `[옵션]` endFillStrokeClass : 트레이스 끝난 후 백그라운드 색 클래스 설정 (기본: '')
        -   `[옵션]` backgroundClass : 트레이스 배경색 클래스 설정 (기본: '')
        -   `[옵션]` fillStrokeClass : 트레이스 채워지는 색 클래스 설정 (기본: '')
    -   `[필수]` soundUrl : 사운드 인덱스 설정

    ```javascript
    learningWord: {
        text: 'Apple',
        x: 300,
        y: 385,
        // gap: 0,
        scale: 2.5,
        fontSize: 50,
        trace: {
            index: 0,
            // offset: { x: 0, y: 0 },
            // endBackgroundClass: 'f01 s01'
        },
        soundUrl: 'sound_index_0'
    }
    ```

    <br />

-   > `[필수]` soundButton | _`object`_

    사운드 버튼 설정  
    자세한 내용은 공통 속성 참조  
    hinttOffset 설정 시 사운드 버튼을 눌려야 trace 진행 됨  
    미설정시 바로 trace 진행

    <br />

> ## EM000017

    대소문자 쓰기
    대문자 -> 소문자 학습 순으로 시작함

-   ### 기본 포맷

    ```javascript
    questionType: 'EM000017',
    directive: { text: 'text_index_0' },
    learningWord: 'B',
    soundButton: {
        x: 185,
        y: 200,
        width: 210,
        height: 140,
        buttonClass: 'f07',
        soundUrl: 'sound_index_0',
        speakerImage: { imgUrl: 'image_index_0', scale: 0.9 },
        innerImage: { imgUrl: 'image_idex_1', scale: 0.65, offset: { x: 0, y: 0 } },
        hintOffset: { x: 85, y: 0 }
    },
    upperCase: {
        x: 530,
        y: 125,
        scale: 4,
        line: true,
        writeAreaClass: 'f06',
        // centerX: true,
        // alphabetHandHintOffset: { x: 0, y: 0 },
        // helpButtonOffset: { x: 20, y: 0 },
        // undoButtonOffset: {x: 0, y: 0},
        // trashButtonOffset: {x: 0, y: 0},
        okButtonPoint: { x: 400, y: 465 },
        alphabetHintOffset: { x: 0, y: 0 }
    },
    lowerCase: {
        x: 530,
        y: 125,
        scale: 4,
        line: true,
        writeAreaClass: 'f06',
        // centerX: true,
        // alphabetHandHintOffset: { x: 0, y: 0 },
        // helpButtonOffset: { x: 20, y: 0 },
        // undoButtonOffset: {x: 0, y: 0},
        // trashButtonOffset: {x: 0, y: 0},
        okButtonPoint: { x: 400, y: 465 },
        alphabetHintOffset: { x: 0, y: 0 }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000017';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` learningWord | _`string`_

    학습 단어 설정(대소문자 상관 없음)

    ```javascript
    learningWord: 'A';
    ```

    <br />

-   > `[필수]` soundButton

    지시문 설정  
    자세한 내용은 공통 속성 참조 hinttOffset 설정 시 사운드 버튼을 눌려야 '알파벳 누른 후 쓰기 학습' 진행 됨  
    미설정시 '알파벳 누른 후 쓰기 학습' 진행

    <br />

-   > `[필수]` upperCase | _`object`_

    쓰기 학습 대문자 설정

    -   `[필수]` x : 쓰기 x 위치 설정
    -   `[필수]` y : 쓰기 y 위치 설정
    -   `[필수]` scale : 쓰기 scale 설정
    -   `[필수]` writeAreaClass: 쓰기 영역 class 설정
    -   `[옵션]` line : 보조선 설정, (기본: true)
    -   `[옵션]` centerX : x를 중앙으로 정렬 (기본: true)
    -   `[옵션]` helpButtonOffset: help 버튼 offset 설정 (기본: {x: 0, y: 0})
        -   `[필수]` x : 핸드 힌트 offset x 값
        -   `[필수]` y : 핸드 힌트 offset y 값
    -   `[옵션]` undoButtonOffset: undo 버튼 offset 설정 (기본: {x: 0, y: 0})
        -   `[필수]` x : undo 버튼 offset x 값
        -   `[필수]` y : undo 버튼 offset y 값
    -   `[옵션]` trashButtonOffset: trash 버튼 offset 설정 (기본: {x: 0, y: 0})
        -   `[필수]` x : trash 버튼 offset x 값
        -   `[필수]` y : trash 버튼 offset y 값
    -   `[필수]` okButtonPoint: ok 버튼 위치 설정
        -   `[필수]` x : ok 버튼 x 값
        -   `[필수]` y : ok 버튼 y 값
    -   `[옵션]` alphabetHintOffset: alphabet hint offset 설정 (기본: {x: 0, y: 0})
        -   `[필수]` x : alphabet hint offset x 값
        -   `[필수]` y : alphabet hint offset y 값

    ```javascript
    upperCase: {
        x: 530,
        y: 125,
        scale: 4,
        writeAreaClass: 'f06',
        // line: true,
        // centerX: true,
        // helpButtonOffset: { x: 20, y: 0 },
        // undoButtonOffset: {x: 0, y: 0},
        // trashButtonOffset: {x: 0, y: 0},
        okButtonPoint: { x: 400, y: 465 },
        alphabetHintOffset: { x: 0, y: 0 }
    }
    ```

    <br />

-   > `[필수]` lowerCase | _`object`_

    쓰기 학습 소문자 설정  
    upperCase와 동일

    <br />

-   > `[필수]` okButton | _`object`_

    ok 버튼 위치 설정

    -   `[필수]` x : ok 버튼 x 위치 설정
    -   `[필수]` y : ok 버튼 y 위치 설정

    ```javascript
    okButton: { x: 400, y: 465 }
    ```

> ## EM000018

    짝글자 찾기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000018',
        directive: { text: 'text_index_0' },
        learningWord: 'A',
        text: {
            x: 80,
            y: 220,
            fontSize: 200,
            // textClass: ''
        },
        image: {
            x: 260,
            y: 240,
            scale: 0.7,
            imgUrl: 'image_index_0',
            // center: true
        },
        choice: {
            x: 450,
            y: 180,
            rows: 2,
            columns: 3,
            gap: { x: 120, y: 100 },
            multiCheck: true,
            common: {
                fontSize: 50,
                defaultImage: { imgUrl: 'image_index_1', scale: 0.5 },
                choiceImage: { imgUrl: 'image_index_2', scale: 1 },
                nonAtctiveChoiceImage: { imgUrl: 'image_index3', scale: 1 }
                // textOffset: { x: 0, y: 0 }
            },
            items: [
                { text: 'a', hintOffset: { x: 0, y: 0 }, textOffset: { x: 0, y: 0 } },
                { text: 'b' },
                { text: 'c' },
                { text: 'b' },
                { text: 'a' },
                { text: 'c' }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000018';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` learningWord | _`string`_

    학습 단어 설정

    ```javascript
    learningWord: 'A';
    ```

    <br />

-   > `[필수]` text | _`object`_

    텍스트 그리기 설정

    -   `[필수]` x : 텍스트 x 위치 설정
    -   `[필수]` y : 텍스트 y 위치 설정
    -   `[필수]` fontSize : 폰트 사이즈 설정
    -   `[옵션]` textClass : 텍스트 클래스 설정 (기본: '')

    ```javascript
    text: {
        x: 80,
        y: 220,
        fontSize: 200,
        // textClass: ''
    }
    ```

    <br />

-   > `[옵션]` image | _`object`_

    이미지 그리기 설정

    -   `[필수]` x : 이미지 x 위치 설정
    -   `[필수]` y : 이미지 y 위치 설정
    -   `[필수]` scale : 이미지 scale 설정
    -   `[필수]` imgUrl : 이미지 인덱스 설정
    -   `[옵션]` center : x, y를 중심으로 중앙 정렬 (기본: true)

    ```javascript
    image: {
        x: 260,
        y: 240,
        scale: 0.7,
        imgUrl: 'image_index_0',
        // center: true
    }
    ```

    <br />

-   > `[필수]` choice | _`object`_

    choice 설정

    -   `[필수]` x : 초이스 전체 x 위치 설정
    -   `[필수]` y : 초이스 전체 y 위치 설정
    -   `[필수]` rows : 행 갯수 설정
    -   `[필수]` columns : 열 갯수 설정
    -   `[필수]` gap : 초이스가 간격 설정
        -   `[필수]` x : x 방향 간격 설정
        -   `[필수]` y : y 방향 간격 설정
    -   `[옵션]` multiCheck : 다중 선택 여부 결정
    -   `[옵션]` common : 초이스의 공통 속성 설정 (각 속성은 common or items 둘 중 하나에는 필수로 들어가야함)
        -   `[옵션]` fontSize : 폰트 사이즈 설정
        -   `[옵션]` defaultImage : 기본 이미지 설정
            -   `[필수]` imgUrl: 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정
        -   `[옵션]` choiceImage : 선택 이미지 설정
            -   `[필수]` imgUrl: 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정
        -   `[옵션]` nonActiveChoiceImage : 비활성화 이미지 설정
            -   `[필수]` imgUrl: 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정
    -   `[옵션]` items: 초이스 설정
        -   `[필수]` text : 텍스트 설정
        -   `[옵션]` hintOffset : hint 설정
            -   `[필수]` x : 힌트 위치 offset x값 설정 (기본: 이미지 가로 중앙)
            -   `[필수]` y : 힌트 위치 offset y값 설정 (기본: 이미지 세로 중앙)
        -   `[옵션]` textOffset : text offset 설정
            -   `[필수]` x : text 위치 offset x값 설정 (기본: 이미지 가로 중앙)
            -   `[필수]` y : text 위치 offset y값 설정 (기본: 이미지 세로 중앙)
        -   `[옵션]` fontSize : 폰트 사이즈 설정
        -   `[옵션]` defaultImage : 기본 이미지 설정
            -   `[필수]` imgUrl: 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정
        -   `[옵션]` choiceImage : 선택 이미지 설정
            -   `[필수]` imgUrl: 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정
        -   `[옵션]` nonActiveChoiceImage : 비활성화 이미지 설정
            -   `[필수]` imgUrl: 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정

    ```javascript
    choice: {
        x: 450,
        y: 180,
        rows: 2,
        columns: 3,
        gap: { x: 120, y: 100 },
        // multiCheck: true,
        common: {
            fontSize: 50,
            defaultImage: { imgUrl: 'image_index_1', scale: 0.5 },
            choiceImage: { imgUrl: 'image_index_2', scale: 1 },
            nonAtctiveChoiceImage: { imgUrl: 'image_index3', scale: 1 }
            // textOffset: { x: 0, y: 0 }
        },
        items: [
            { text: 'a', hintOffset: { x: 0, y: 0 }, textOffset: { x: 0, y: 0 } },
            { text: 'b' },
            { text: 'c' },
            { text: 'b' },
            { text: 'a' },
            { text: 'c' }
        ]
    }
    ```

<br />

> ## EM000019

    짝글자 쓰기

-   ### 기본 포맷

    ```javascript
        {
        questionType: 'EM000019',
        directive: { text: 'text_index_0' },
        learningWord: 'B',
        soundButton: {
            x: 400,
            y: 140,
            width: 210,
            height: 140,
            buttonClass: 'f07',
            soundUrl: 'sound_index_0',
            speakerImage: { imgUrl: 'image_index_0', scale: 0.9 },
            innerImage: { imgUrl: 'image_index_1', scale: 0.35, offset: { x: 0, y: 0 } }
            // hintOffset: { x: 0, y: 0 }
        },
        background: {
            x: 100,
            y: 220,
            width: 600,
            height: 220,
            backgroundClass: 'f06'
        },
        text: {
            x: 250,
            y: 240,
            scale: 3.7,
            // centerX: true
        },
        write: {
            x: 540,
            y: 240,
            scale: 3.7,
            line: true,
            writeAreaClass: 'f02',
            centerX: true,
            helpButtonOffset: { x: 0, y: 0 },
            undoButtonOffset: { x: 0, y: 0 },
            trashButtonOffset: { x: 0, y: 0 },
            okButtonPoint: { x: 400, y: 465 },
            alphabetHintOffset: { x: 0, y: 0 }
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000019';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` learningWord | _`string`_

    학습 단어 설정

    ```javascript
    learningWord: 'B';
    ```

    <br />

-   > `[필수]` soundButton | _`object`_

    사운드 버튼 설정  
    자세한 내용은 공통 속성 참조 hintOffset 설정 시 사운드버튼을 눌러야 write 진행

-   > `[필수]` background | _`object`_

    백그라운드 렉트 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` width : 가로 길이 설정
    -   `[필수]` height : 세로 길이 설정
    -   `[옵션]` backgroundClass : 클래스 설정 (기본: '')

    ```javascript
    background: {
        x: 100,
        y: 220,
        width: 600,
        height: 220,
        backgroundClass: 'f06'
    }
    ```

    <br />

-   > `[필수]` text | _`object`_

    보여지는 텍스트 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` scale : scale 설정
    -   `[필수]` centerX : x를 중심으로 중앙정렬 (기본: true)

    ```javascript
    text: {
        x: 180,
        y: 240,
        scale: 1.5
        // centerX:  true
    }
    ```

    <br />

-   > `[필수]` write | _`object`_

    쓰기 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` scale : scale 설정
    -   `[옵션]` writeAreaClass : 쓰기 영역 클래스 설정 (기본: '')
    -   `[옵션]` line : 보조선 보여주기 여부 설정 (기본: true)
    -   `[옵션]` centerX : x를 중심으로 중앙 정렬 설정 (기본: false)
    -   `[옵션]` helpButtonOffset : 헬프 버튼 offset 설정 (기본: {x: 0, y: 0})
        -   `[필수]` x : 헬프 버튼 offset x 값 설정
        -   `[필수]` y : 헬프 버튼 offset y 값 설정
    -   `[옵션]` undoButtonOffset : 하나 지우기 버튼 offset 설정 (기본: {x: 0, y: 0})
        -   `[필수]` x : 하나 지우기 버튼 offset x 값 설정
        -   `[필수]` y : 하나 지우기 버튼 offset y 값 설정
    -   `[옵션]` trashButtonOffset : 모두 지우기 버튼 offset 설정 (기본: {x: 0, y: 0})
        -   `[필수]` x : 모두 지우기 버튼 offset x 값 설정
        -   `[필수]` y : 모두 지우기 버튼 offset y 값 설정
    -   `[필수]` okButtonPoint : ok 버튼 위치 설정
        -   `[필수]` x : ok 버튼 x 값 설정
        -   `[필수]` y : ok 버튼 y 값 설정

    ```javascript
    write: {
        x: 540,
        y: 240,
        scale: 3.7,
        // writeAreaClass: 'f02',
        // line: true,
        // centerX: true,
        // helpButtonOffset: { x: 20, y: 0 },
        // undoButtonOffset: { x: 10, y: 0 },
        // trashButtonOffset: {x: 0, y: 0},
        // okButtonPoint: { x: 400, y: 465 }
    }
    ```

    <br />

-   > `[필수]` okButton | _`object`_

        okButton 위치 설정

    -   > `[필수]` x : x 위치 설정
    -   > `[필수]` y : y 위치 설정

    ```javascript
    okButton: {
        x: 400,
        y: 470
    }
    ```

    <br />

> ## EM000020

    알파벳 순서 알기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000020',
        directive: { text: 'text_index_0' },
        mainImage: {
            x: 400,
            y: 270,
            imgUrl: 'image_index_0',
            scale: 1
            // center
        },
        soundUrl: 'sound_index_0',
        common: {
            dotRadius: 12.5,
            fontSize: 40
        },
        dotConnect1: [
            {
                dot: { x: 60, y: 100 },
                text: {
                    word: 'A',
                    // offset: { x: 35, y: 0 }
                }
            }
        ],
        dotConnect2: [
            {
                dot: { x: 60, y: 200 },
                text: {
                    word: 'a',
                    // offset: { x: 0, y: 0 }
                }
            }
        ]
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000020';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` mainImage | _`object`_

    이미지 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` imgUrl : 이미지 인덱스 설정
    -   `[필수]` scale : 이미지 스케일 설정
    -   `[옵션]` center : x, y를 중심으로 중앙 정렬 (기본: true)

    ```javascript
        mainImage: {
            x: 400,
            y: 270,
            imgUrl: 'image_index_0',
            scale: 1
            // center: true
        }
    ```

    <br />

-   > `[필수]` soundUrl | _`string`_

    연결하고 끝난 후 재생 될 사운드 설정

    ```javascript
    soundUrl: 'sound_index_0';
    ```

    <br />

-   > `[옵션]` common | _`object`_

    연결하기 공통 속성 설정  
    각 속성은 common or (dotConnect1 && dotConnect2) 둘 중 하나에는 필수로 들어가야함

    -   > `[옵션]` dotRadius : 점 크기 설정
    -   > `[옵션]` fontSize : 폰트 사이즈 설정

    ```javascript
    common: {
        dotRadius: 12.5,
        fontSize: 40
    }
    ```

    <br />

-   > `[필수]` dotConnect1 | _`array[object]`_

    연결하기 설정

    -   `[필수]` dot : 점 설정
        -   `[필수]` x : 점 x 위치 설정
        -   `[필수]` y : 점 y 위치 설정
        -   `[옵션]` dotRadius : 점 크기 설정
    -   `[필수]` text : 텍스트 설정
        -   `[필수]` word : 텍스트 설정
        -   `[옵션]` offset : text offset 설정 (기본: 점 중앙)
            -   `[필수]` x : text offset x 값 설정
            -   `[필수]` y : text offset y 값 설정
        -   `[옵션]` fontSize : 폰트 사이즈 설정

    ```javascript
    dotConnect1: [
        {
            dot: {
                x: 60,
                y: 100
                // dotRadius: 10
            },
            text: {
                word: 'A'
                // offset: { x: 0, y: 0 }
                // fontSize: 16
            }
        }
    ];
    ```

    <br />

-   > `[필수]` dotConnect2 | _`array[object]`_

    dotConnet1과 동일

<br />

> ## EM000021

    알파벳 순서로 따라 쓰기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000021',
        directive: { text: 'text_index_0' },
        learningWord: ['A', 'B', 'A'],
        images: [
            {
                x: 400,
                y: 175,
                scale: 1,
                imgUrl: 'image_index_0'
            }
        ],
        stepText: {
            x: 570,
            y: 100,
            fontSize: 40,
            soundUrl: ['sound_index_3', 'sound_index_4', 'sound_index_5'],
            defaultClass: {
                text: 'f04',
                background: 'f02'
            },
            choiceClass: {
                text: 'f02',
                background: 'f06'
            }
        },
        trace: {
            x: 400,
            y: 300,
            scale: 1.5,
            gap: 50
            // backgroundClass: '',
            // fillStrokeClass: ''
            // centerX : true
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000021';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` learningWord | _`array[string]`_

    학습 단어 설정

    ```javascript
    learningWord: ['A', 'B', 'A'];
    ```

    <br />

-   > `[필수]` images | _`array[object]`_

    스텝별 이미지 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` scale : scale 설정
    -   `[필수]` imgUrl : 이미지 인덱스 설정

    ```javascript
    images: [
        {
            x: 400,
            y: 175,
            scale: 1,
            imgUrl: 'image_index_0'
        }
    ];
    ```

    <br />

-   > `[필수]` stepText | _`object`_

    제시 텍스트 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` fontSize : fontSize 설정
    -   `[필수]` soundUrl : 각 텍스트 사운드 인덱스 설정(learningWord와 순서대로 매칭 됨)
    -   `[필수]` defaultClass : 선택되지 않았을 경우 클래스 설정
        -   `[옵션]` text : 텍스트 클래스 설정 (기본: '')
        -   `[옵션]` background : 백그라운드 클래스 설정 (기본: '')
    -   `[필수]` choiceClass : 선택 되었을 경우 클래스 설정
        -   `[옵션]` text : 텍스트 클래스 설정 (기본: '')
        -   `[옵션]` background : 백그라운드 클래스 설정 (기본: '')

    ```javascript
    stepText: {
        x: 570,
        y: 100,
        fontSize: 40,
        soundUrl: ['sound_index_3', 'sound_index_4', 'sound_index_5'],
        defaultClass: {
            text: 'f04',
            background: 'f02'
        },
        choiceClass: {
            text: 'f02',
            background: 'f06'
        }
    }
    ```

    <br />

-   > `[필수]` trace | _`object`_

    따라 쓰기 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` scale : 트레이스 크기 설정
    -   `[필수]` gap : 대문자/소문자 트레이스 사이 간격 설정
    -   `[필수]` backgroundClass: 트레이스 알파벳 배경색 클래스 설정
    -   `[필수]` fillStrokeClass: 채워지는 색 클래스 설정
    -   `[필수]` centerX : x를 중심으로 중앙 정렬 설정

    ```javascript
    trace: {
        x: 400,
        y: 300,
        scale: 1.5,
        gap: 50
        // backgroundClass: '',
        // fillStrokeClass: ''
        // centerX : true
    }
    ```

    <br />

> ## EM000022

    알파벳 순서로 따라 쓰기

-   ### 기본 포맷

    ```javascript
    questionType: 'EM000022',
    directive: { text: 'text_index_0' },
    question: {
        x: 400,
        y: 80,
        lineWidth: 700,
        lineClass: 'sE1gray',
        scale: 3,
        // centerX: false,
        alphabet: 'abB',
        target: ['b', 'B'],
        alphabetFillClass: 'f05',
        questionMarkFillClass: {
            active: 'fE1red',
            nonActive: 'fE1lightgray'
        }
    },
    write: {
        x: 400,
        y: 235,
        scale: 3.7,
        // cetnerX: true,
        // writeClass: '',
        writeAreaClass: 'f06',
        helpButtonOffset: { x: 185, y: -165 },
        undoButtonOffset: { x: 102.5, y: -37.5 },
        trashButtonOffset: { x: 95, y: -37.5 },
        okButtonPoint: { x: 400, y: 460 }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000022';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` question | _`object`_

    상단 문제 영역 부분 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` lineWidth : 보조선 길이 설정
    -   `[필수]` liceClass : 보조선 클래스 설정
    -   `[필수]` scale : 알파벳 크기 설정
    -   `[옵션]` centerX : x를 중심으로 중앙 정렬
    -   `[필수]` alphabet : 그려질 알파벳 설정
    -   `[필수]` alphabetFillclass : 알파벳 클래스 설정
    -   `[필수]` target : write 대상 알파벳 설정
    -   `[필수]` questionMarkFillClass : 물음표 클래스 설정
        -   `[필수]` active : 활성화 클래스 설정
        -   `[필수]` nonActive : 비활성화 클래스 설정

    ```javascript
    question: {
        x: 400,
        y: 80,
        lineWidth: 700,
        lineClass: 'sE1gray',
        scale: 3,
        // centerX: false,
        alphabet: 'abB',
        target: ['b', 'B'],
        alphabetFillClass: 'f05',
        questionMarkFillClass: {
            active: 'fE1red',
            nonActive: 'fE1lightgray'
        }
    }
    ```

    <br />

-   > `[필수]` write | _`object`_

    쓰기 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` scale : scale 설정
    -   `[옵션]` centerX : x를 중심으로 중앙 정렬
    -   `[옵션]` writeClass : 쓰기 클래스 설정
    -   `[필수]` writeAreaClass : 쓰기 영역 클래스 설정
    -   `[옵션]` helpButtonOffset : 헬프 버튼 위치 미세 조정(기본 {x: 0, y: 0})
        -   `[필수]` x : x offset 값 설정
        -   `[필수]` y : y offset 값 설정
    -   `[옵션]` undoButtonOffset : 하나 지우기 버튼 위치 미세 조정(기본 {x: 0, y: 0})
        -   `[필수]` x : x offset 값 설정
        -   `[필수]` y : y offset 값 설정
    -   `[옵션]` trashButtonOffset : 모두 지우기 버튼 위치 미세 조정(기본 {x: 0, y: 0})
        -   `[필수]` x : x offset 값 설정
        -   `[필수]` y : y offset 값 설정
    -   `[필수]` okButtonPoint : ok 버튼 위치 설정
        -   `[필수]` x : x offset 값 설정
        -   `[필수]` y : y offset 값 설정

    ```javascript
    write: {
        x: 400,
        y: 235,
        scale: 3.7,
        // cetnerX: true,
        // writeClass: '',
        writeAreaClass: 'f06',
        // helpButtonOffset: { x: 185, y: -165 },
        // undoButtonOffset: { x: 102.5, y: -37.5 },
        // trashButtonOffset: { x: 95, y: -37.5 },
        okButtonPoint: { x: 400, y: 460 }
    }
    ```

    <br />

> ## EM000023

    짝글자 쓰기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000023',
        directive: { text: 'text_index_0' },
        write: {
            x: 600,
            y: 200,
            scale: 2,
            answer: 'B',
            // writeClass: '',
            writeAreaClass: 'fE1transpaent',
            helpButtonOffset: { x: 0, y: 0 },
            undoButtonOffset: { x: 0, y: 0 },
            trashButtonOffset: { x: 0, y: 0 },
            okButtonPoint: { x: 400, y: 460 },
            alphabetFillClass: 'f01 s01',
            gap: 10,
            handHintOffset: { x: 0, y: 0 },
            backgroundImage: {
                imgUrl: 'image_index_0',
                scale: 1,
                offset: { x: 0, y: 0 }
            }
        },
        createElement: {
            image: [
                { order: 0, x: 200, y: 200, scale: 1, imgUrl: 'image_index_1' },
                { order: 1, x: 200, y: 200, scale: 1, imgUrl: 'image_index_2' }
            ],
            textPath: [
                { order: 0, x: 200, y: 200, scale: 1, gap: 0, text: 'Bb', fillCalss: 'f01 s01' },
                { order: 1, x: 430, y: 300, scale: 1, gap: 0, text: 'Cc', fillCalss: 'f01 s01' }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000023';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` write | _`object`_

    쓰기 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` scale : scale 설정
    -   `[필수]` answer : 쓰기 정답 설정
    -   `[옵션]` writeClass : 쓰기 클래스 설정 (기본: '')
    -   `[필수]` writeAreaClass : 쓰기 영역 클래스 설정
    -   `[옵션]` helpButtonOffset : 헬프 버튼 미세 조정(기본: {x: 0, y: 0})
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정
    -   `[옵션]` undoButtonOffset : 뒤로 가기 버튼 미세 조정(기본: {x: 0, y: 0})
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정
    -   `[옵션]` trashButtonOffset : 모두 지우기 버튼 미세 조정(기본: {x: 0, y: 0})
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정
    -   `[필수]` okButtonPoint : ok 버튼 위치 설정
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정
    -   `[필수]` alphaberFillClass : 쓰기 옆 알파벳 클래스 설정
    -   `[옵션]` gap : 알파벳과 쓰기 사이 간격 설정(기본: 0)
    -   `[옵션]` handHintOffset : 손가락 힌트 위치 미세 조정(기본: {x: 0, y: 0})
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정
    -   `[옵션]` backgroundImage
        -   `[필수]` imgUrl
        -   `[필수]` scale
        -   `[옵션]` offset: 이미지 위치 미세 조정(기본: {x: 0, y: 0})
            -   `[필수]` x : x offset값 설정
            -   `[필수]` y : y offset값 설정

    ```javascript
    write: {
        x: 600,
        y: 200,
        scale: 2,
        answer: 'B',
        // writeClass: '',
        writeAreaClass: 'fE1transpaent',
        // helpButtonOffset: { x: 0, y: 0 },
        // undoButtonOffset: { x: 0, y: 0 },
        // trashButtonOffset: { x: 0, y: 0 },
        okButtonPoint: { x: 400, y: 460 },
        alphabetFillClass: 'f01 s01',
        // gap: 0,
        // handHintOffset: { x: 0, y: 0 },
        // backgroundImage: {
            // imgUrl: 'image_index_0',
            // scale: 1,
            // offset: { x: 0, y: 0 }
        // }
    }
    ```

    <br />

> ## EM000024

    알맞은 것 고르기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000024',
        directive: { text: 'text_index_0' },
        choice: {
            x: 400,
            y: 350,
            // center: true,
            rows: 2,
            columns: 4,
            centerGap: { x: 150, y: 120 },
            answer: ['A', 'a'],
            // hintCount: 0,
            // multiCheck: true,
            button: {
                width: 90,
                height: 90,
                // buttonEffect: true,
                // shadow: true
            },
            // okButtonPoint: { x: 400, y: 460 },
            item: ['A', 'B', 'C', 'a', 'c', 'a', 'b', 'A'],
            fontSize: 65,
            defaultClass: {
                background: 'f02 sE1lightgray',
                text: 'f01'
            },
            choiceClass: {
                background: 'f05 sE1lightgray',
                text: 'f02'
            },
            nonActiveClass: {
                background: 'fE1lightgray sE1lightgray',
                text: 'fE1gray'
            }
        },
        createElement: {
            shape: [{ order: 0, type: 'circle', cx: 400, cy: 130, radius: 55, shapeClass: 'f13' }],
            text: [{ order: 1, x: 400, y: 130, word: 'A', fontSize: 65 }]
            // totalOrder: 5
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000024';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` choice | _`object`_

    초이스 설정

    -   `[필수]` x : 초이스 전체 x 위치 설정
    -   `[필수]` y : 초이스 전체 y 위치 설정
    -   `[옵션]` center : 초이스 전체 x, y를 중심으로 중앙 정렬 (기본: true)
    -   `[필수]` rows : 행 개수 설정
    -   `[필수]` columns : 열 개수 설정
    -   `[필수]` centerGap : 초이스 간격 설정 (\* 주의: 중심 사이 간격)
    -   `[필수]` answer : 정답 설정
    -   `[옵션]` hintCount : 힌트 수 설정 (기본: 0)
    -   `[옵션]` multiCheck : 멀티 체크 여부 설정 (기본: false)
    -   `[필수]` button : 초이스 버튼 설정
        -   `[필수]` width : 버튼 가로 길이 설정
        -   `[필수]` height : 버튼 세로 길이 설정
        -   `[옵션]` buttonEffect : 버튼 효과 설정 (기본: true)
        -   `[옵션]` shadow : 그림자 효과 설정 (기본: true)
    -   `[조건]` okButtonPoint : multiCheck true일 시 `[필수]`
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
    -   `[필수]` item: 버튼 텍스트 설정
    -   `[필수]` fontSize : 텍스트 사이즈 설정
    -   `[필수]` defaultClass : 기본 상태 클래스 설정
        -   `[필수]` background: 버튼 클래스 설정
        -   `[필수]` text: 텍스트 클래스 설정
    -   `[필수]` choiceClass : 선택될 시 클래스 설정
        -   `[필수]` background: 버튼 클래스 설정
        -   `[필수]` text: 텍스트 클래스 설정
    -   `[필수]` nonActiveClass : 비활성화(오답) 시 클래스 설정
        -   `[필수]` background: 버튼 클래스 설정
        -   `[필수]` text: 텍스트 클래스 설정

    ```javascript
    choice: {
        x: 400,
        y: 350,
        // center: true,
        rows: 2,
        columns: 4,
        centerGap: { x: 150, y: 120 },
        answer: 'A',
        // hintCount: 0,
        // multiCheck: true,
        button: {
            width: 90,
            height: 90,
            // buttonEffect: true,
            // shadow: true
        },
        // okButtonPoint: { x: 400, y: 460 },
        item: ['A', 'B', 'C', 'a', 'c', 'a', 'b', 'A'],
        fontSize: 65,
        defaultClass: {
            background: 'f02 sE1lightgray',
            text: 'f01'
        },
        choiceClass: {
            background: 'f05 sE1lightgray',
            text: 'f02'
        },
        nonActiveClass: {
            background: 'fE1lightgray sE1lightgray',
            text: 'fE1gray'
        }
    }
    ```

    <br />

> ## EM000025

    알파벳 듣고 쓰기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000025',
        directive: { text: 'text_index_0' },
        speakerButton: {
            x: 200,
            y: 250,
            activeImgUrl: 'images/bat001.png',
            nonActiveImgUrl: 'images/bus001.png',
            scale: 1,
            soundUrl: 'sounds/bat.mp3',
            // center: true
            hintOffset: { x: 0, y: 0 }
        },
        write: {
            x: 500,
            y: 170,
            scale: 4,
            answer: 'A',
            // writeClass: '',
            line: true,
            writeAreaClass: 'f06',
            helpButtonOffset: { x: 0, y: 0 },
            undoButtonOffset: { x: 0, y: 0 },
            trashButtonOffset: { x: 0, y: 0 },
            okButtonPoint: { x: 400, y: 460 },
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000025';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` speakerButton | _`object`_

    스피커 버튼 설정  
    hintOffset 제외 시 바로 write 시작  
    nonActiveImgUrl 제외 시 active 이미지만 나옴

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` activeImgUrl : 활성화 이미지 설정
    -   `[옵션]` nonActiveImgUrl : 비활성화 이미지 설정
    -   `[필수]` scale : 스케일 설정
    -   `[필수]` soundUrl : 음원 인덱스 설정
    -   `[옵션]` center : x, y를 중심으로 중앙 정렬 (기본: true)
    -   `[옵션]` hintOffset : 힌트 설정 (기본 : {x: 0, y: 0})
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정

    ```javascript
    speakerButton: {
        x: 200,
        y: 250,
        activeImgUrl: 'images/bat001.png',
        nonActiveImgUrl: 'images/bus001.png',
        scale: 1,
        soundUrl: 'sounds/bat.mp3',
        // center: true
        hintOffset: { x: 0, y: 0 }
    }
    ```

    <br />

-   > `[필수]` write | _`object`_

    쓰기 설정

    -   `[필수]` x : x 위치 설정
    -   `[필수]` y : y 위치 설정
    -   `[필수]` scale : scale 설정
    -   `[필수]` answer : 쓰기 정답 설정
    -   `[옵션]` line : 보조선 여부 설정 (기본: true)
    -   `[옵션]` writeClass : 쓰기 클래스 설정 (기본: '')
    -   `[필수]` writeAreaClass : 쓰기 영역 클래스 설정
    -   `[옵션]` helpButtonOffset : 헬프 버튼 미세 조정(기본: {x: 0, y: 0})
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정
    -   `[옵션]` undoButtonOffset : 뒤로 가기 버튼 미세 조정(기본: {x: 0, y: 0})
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정
    -   `[옵션]` trashButtonOffset : 모두 지우기 버튼 미세 조정(기본: {x: 0, y: 0})
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정
    -   `[필수]` okButtonPoint : ok 버튼 위치 설정
        -   `[필수]` x : x offset값 설정
        -   `[필수]` y : y offset값 설정

    ```javascript
        write: {
        x: 500,
        y: 170,
        scale: 4,
        answer: 'A',
        line: true,
        // writeClass: '',
        writeAreaClass: 'f06',
        helpButtonOffset: { x: 0, y: 0 },
        undoButtonOffset: { x: 0, y: 0 },
        trashButtonOffset: { x: 0, y: 0 },
        okButtonPoint: { x: 400, y: 460 },
    }
    ```

    <br />

> ## EM000026

    알맞은 알파벳 고르기
    애니메이션 효과

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000026',
        directive: { text: 'text_index_0' },
        answer: 'd',
        choice: {
            fontSize: 40,
            textClass: {
                default: 'f01',
                choice: 'f14',
                nonActive: 'f12'
            },
            item: [
                {
                    x: 230,
                    y: 320,
                    text: 'd',
                    textOffset: { x: 0, y: 0 },
                    moveOffset: { x: 0, y: 0 },
                    backgroundImgUrl: 'image_index_0',
                    scale: 0.5
                },
                {
                    x: 320,
                    y: 350,
                    text: 'd',
                    textOffset: { x: 0, y: 0 },
                    moveOffset: { x: 0, y: 0 },
                    backgroundImgUrl: 'image_index_0',
                    scale: 0.5
                },
                {
                    x: 450,
                    y: 400,
                    text: 'd',
                    textOffset: { x: 0, y: 0 },
                    moveOffset: { x: 0, y: 0 },
                    backgroundImgUrl: 'image_index_0',
                    scale: 0.5
                },
                {
                    x: 600,
                    y: 380,
                    text: 'd',
                    textOffset: { x: 0, y: 0 },
                    moveOffset: { x: 0, y: 0 },
                    backgroundImgUrl: 'image_index_0',
                    scale: 0.5
                },
                {
                    x: 280,
                    y: 400,
                    text: 'a',
                    textOffset: { x: 0, y: 0 },
                    backgroundImgUrl: 'image_index_0',
                    scale: 0.5
                },
                {
                    x: 480,
                    y: 330,
                    text: 'a',
                    textOffset: { x: 0, y: 0 },
                    backgroundImgUrl: 'image_index_0',
                    scale: 0.5
                },
                {
                    x: 580,
                    y: 320,
                    text: 'b',
                    textOffset: { x: 0, y: 0 },
                    backgroundImgUrl: 'image_index_0',
                    scale: 0.5
                },
                {
                    x: 640,
                    y: 445,
                    text: 'b',
                    textOffset: { x: 0, y: 0 },
                    backgroundImgUrl: 'image_index_0',
                    scale: 0.5
                }
            ]
        },
        choiceEndMoveItem: {
            start: {
                x: 100,
                y: 150,
                text: 'D',
                fontSize: 40,
                textClass: '',
                textOffset: { x: 0, y: 0 },
                imgUrl: 'image_index_2',
                scale: 0.5
            },
            end: {
                x: 700,
                y: 250,
                text: 'D',
                fontSize: 40,
                textClass: '',
                textOffset: { x: 0, y: 0 },
                imgUrl: 'image_index_1',
                scale: 0.5
            },
            moveEndPointOffset: { x: -50, y: 25 },
            moveDuration: 2,
            holdDuration: 0.4
        },
        createElement: {
            image: [{ x: 400, y: 330, imgUrl: 'image_index_3', scale: 1 }]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000026';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` answer | _`string`_

    정답 설정

    ```javascript
    answer: 'd';
    ```

    <br />

-   > `[필수]` choice | _`object`_

    초이스 설정

    -   `[필수]` fontSize : 폰트 사이즈 설정
    -   `[필수]` textClass : 초이스 상황에 따른 클래스 설정
        -   `[필수]` default : 기본 클래스 설정
        -   `[필수]` coice : 정답인 경우 클래스 설정
        -   `[필수]` nonActive : 오답인 경우 클래스 설정
    -   `[필수]` item : 초이스 아이템 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` text : 텍스트 설정
        -   `[옵션]` textOffset : 텍스트 위치 미세 조정 (기본: { x: 0, y: 0 })
            -   `[필수]` x : x offset 값 설정
            -   `[필수]` y : y offset 값 설정
        -   `[옵션]` moveOffset : 애니메이션 위치 미세 조정 (기본: { x: 0, y: 0 })
            -   `[필수]` x : x offset 값 설정
            -   `[필수]` y : y offset 값 설정
        -   `[필수]` backgroundImgUrl : 이미지 인덱스 설정
        -   `[필수]` scale : 이미지 스케일 설정

    ```javascript
    choice: {
        fontSize: 40,
        textClass: {
            default: 'f01',
            choice: 'f14',
            nonActive: 'f12'
        },
        item: [
            {
                x: 230,
                y: 320,
                text: 'd',
                textOffset: { x: 0, y: 0 },
                moveOffset: { x: 0, y: 0 },
                backgroundImgUrl: 'image_index_0',
                scale: 0.5
            }
        ]
    }
    ```

    <br />

-   > `[필수]` choiceEndMoveItem | _`object`_

    정답 후 실행 되는 애니메이션 설정

    -   `[필수]` start : 애니메이션 시작 지점 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` text : 텍스트 설정
        -   `[필수]` fontSize : 폰트 사이즈 설정
        -   `[필수]` textClass : 텍스트 클래스 설정
        -   `[필수]` textOffset : 텍스트 위치 미세조정
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
        -   `[필수]` imgUrl : 이미지 인덱스 설정
        -   `[필수]` scale : 이미지 스케일 설정
    -   `[필수]` end : 애니메이션 끝 지점 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` text : 텍스트 설정
        -   `[필수]` fontSize : 폰트 사이즈 설정
        -   `[필수]` textClass : 텍스트 클래스 설정
        -   `[필수]` textOffset : 텍스트 위치 미세조정
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
        -   `[필수]` imgUrl : 이미지 인덱스 설정
        -   `[필수]` scale : 이미지 스케일 설정
    -   `[옵션]` moveEndPointOffset : 애니메이션 끝 지점 미세 조정
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[필수]` moveDuration : 애니메이션 duration 설정(단위: 초)
    -   `[필수]` holdDuration : 애니메이션 멈춰 있는 durtaion 설정 설정(단위: 초)

    ```javascript
    choiceEndMoveItem: {
        start: {
            x: 100,
            y: 150,
            text: 'D',
            fontSize: 40,
            textClass: '',
            textOffset: { x: 0, y: 0 },
            imgUrl: 'image_index_2',
            scale: 0.5
        },
        end: {
            x: 700,
            y: 250,
            text: 'D',
            fontSize: 40,
            textClass: '',
            textOffset: { x: 0, y: 0 },
            imgUrl: 'image_index_1',
            scale: 0.5
        },
        moveEndPointOffset: { x: -50, y: 25 },
        moveDuration: 2,
        holdDuration: 0.4
    }
    ```

    <br />

> ## EM000027

    알맞은 것 고르기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000027',
        directive: { text: 'text_index_0' },
        lineClass: 's05',
        lineDrawDuration: 0.5,
        lineAttributes: {
            // ...CSS attributes
        }
        hintCount: 1,
        choice: {
            common: {
                fontSize: 40,
                defaultClass: 'f01',
                choiceClass: 'f14',
                img: { imgUrl: 'image_index_0', scale: 0.5 },
                textOffset: { x: 0, y: 0 },
                dotOffset: { x: 0, y: 60 }
            },
            item: [
                {
                    point: { x: 100, y: 150 },
                    text: 'B'
                    // fontSize: 80,
                    // defaultClass: 'f01',
                    // choiceClass: 'f14',
                    // img: { imgUrl: 'images/bus001.png', scale: 0.5 },
                    // textOffset: { x: 0, y: 0 },
                    // dotOffset: { x: 0, y: 0 }
                    // center: true
                },
                {
                    point: { x: 250, y: 150 },
                    text: 'D'
                },
                {
                    point: { x: 400, y: 150 },
                    text: 'A'
                },
                {
                    point: { x: 550, y: 150 },
                    text: 'F'
                },
                {
                    point: { x: 700, y: 150 },
                    text: 'G'
                }
            ]
        },
        oppositeChoice: {
            common: {
                fontSize: 40,
                defaultClass: 'f01',
                choiceClass: 'f02',
                img: { imgUrl: 'image_index_1', scale: 0.5 },
                textOffset: { x: 0, y: 0 },
                dotOffset: { x: 0, y: -60 }
            },
            item: [
                {
                    point: { x: 100, y: 380 },
                    text: 'f'
                }
            ]
        }
        // createElement: {
        //     image: [{ order: 0, x: 400, y: 270, imgUrl: 'images/duck001.png', scale: 0.85 }]
        // }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000027';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` lineClass | _`string`_

    그려지는 선 색상 클래스 설정

    ```javascript
    lineClass: 's05';
    ```

<br />

-   > `[필수]` lineDrawDuration | _`string`_

        선이 그려지는 시간 설정

        ```javascript
        lineDrawDuration: 0.5;
        ```

    <br />

-   > `[옵션]` lineAttributes | _`string`_

        선이 그려지는 시간 설정

        ```javascript
        lineAttributes: {
            stroekWidth: 2;
        };
        ```

    <br />

-   > `[옵션]` hintCount | _`number`_

    힌트 횟수 설정

    ```javascript
    hintCount: 1;
    ```

<br />

-   > `[필수]` choice | _`object`_

    초이스 설정

    -   `[조건]` common : 초이스 공통 속성 설정 (각 속성은 common 또는 item에 필수로 있어야 함)
        -   `[옵션]` fontSize : 폰트 사이즈 설정
        -   `[옵션]` defaultClass : 초이스 기본 상태 클래스 설정
        -   `[옵션]` choiceClass : 선택된 상태 클래스 설정
        -   `[옵션]` img : 이미지 설정
            -   `[필수]` imgUrl : 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정
        -   `[옵션]` textOffset : 텍스트 위치 미세 조정(기본: 이미지 중앙)
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
        -   `[옵션]` dotOffset : 연결되는 점 미세 조정(기본: 이미지 중앙)
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
    -   `[필수]` item : 초이스 속성 설정
        -   `[필수]` point : 위치 설정
            -   `[필수]` x : x 위치 설정
            -   `[필수]` y : y 위치 설정
        -   `[필수]` text : text 설정
        -   `[옵션]` fontSize : 폰트 사이즈 설정
        -   `[옵션]` defaultClass : 초이스 기본 상태 클래스 설정
        -   `[옵션]` choiceClass : 선택된 상태 클래스 설정
        -   `[옵션]` img : 이미지 설정
            -   `[필수]` imgUrl : 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정
        -   `[옵션]` textOffset : 텍스트 위치 미세 조정(기본: 이미지 중앙)
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
        -   `[옵션]` dotOffset : 연결되는 점 미세 조정(기본: 이미지 중앙)
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
        -   `[옵션]` center : x, y를 중심으로 중앙 정렬(기본: true)

    ```javascript
    choice: {
        common: {
            fontSize: 40,
            defaultClass: 'f01',
            choiceClass: 'f14',
            img: { imgUrl: 'image_index_0', scale: 0.5 },
            textOffset: { x: 0, y: 0 },
            dotOffset: { x: 0, y: 60 }
        },
        item: [
            {
                point: { x: 100, y: 150 },
                text: 'B'
                // fontSize: 80,
                // defaultClass: 'f01',
                // choiceClass: 'f14',
                // img: { imgUrl: 'images/bus001.png', scale: 0.5 },
                // textOffset: { x: 0, y: 0 },
                // dotOffset: { x: 0, y: 0 }
                // center: true
            },
            {
                point: { x: 250, y: 150 },
                text: 'D'
            },
            {
                point: { x: 400, y: 150 },
                text: 'A'
            },
            {
                point: { x: 550, y: 150 },
                text: 'F'
            },
            {
                point: { x: 700, y: 150 },
                text: 'G'
            }
        ]
    }
    ```

    <br />

-   > `[필수]` oppositeChoice | _`object`_

    초이스 설정  
    choice와 속성 동일

    <br />

> ## EM000028

    알맞은 것 고르기
    애니메이션 효과

-   ### 기본 포맷

    ```javascript
    EM000028: {
        questionType: 'EM000028',
        directive: { text: 'text_index_0' },
        moveElement: {
            start: {
                x: 100,
                y: 100,
                img: { imgUrl: 'images/bat001.png', scale: 0.5, center: true }
            },
            end: {
                x: 700,
                y: 450,
                img: { imgUrl: 'images/bat001.png', scale: 0.5, center: true }
            },
            endOffset: { x: -50, y: 0 },
            duration: 0.5
        },
        choice: {
            x: 400,
            y: 270,
            width: 100,
            height: 80,
            // center: true,
            fontSize: 40,
            textOffset: { x: 0, y: 0 },
            hintCount: 2,
            hintOffset: { x: 0, y: 0 },
            backgroundAttributes: {
                default: {},
                choice: {},
                nonActive: {}
            },
            defaultClass: {
                background: 'f08 s12',
                text: 'f01'
            },
            choiceClass: {
                background: 'f05 s12',
                text: 'f02'
            },
            nonActiveClass: {
                background: 'f07 s12',
                text: 'f12'
            },
            item: [
                ['Aa', 'Cc', 'Ff', 'Dd', 'Ee'],
                ['Bb', 'Dd', 'Bb', 'Cc', 'Ff'],
                ['Cc', 'Dd', 'Ee', 'Ff', 'Gg']
            ],
            answer: [
                [0, 0],
                [1, 0],
                [2, 0],
                [2, 1],
                [2, 2],
                [2, 3],
                [2, 4]
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000028';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` moveElement | _`object`_

    애니메이트 설정

    -   `[필수]` start: 시작 엘리먼트 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` img : 이미지 설정
            -   `[필수]` imgUrl: 이미지 인덱스 설정
            -   `[필수]` scale: 스케일 설정
            -   `[옵션]` center: x, y를 중심으로 중앙 정렬 (기본: true)
    -   `[필수]` end: 종료 엘리먼트 설정
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` img : 이미지 설정
            -   `[필수]` imgUrl: 이미지 인덱스 설정
            -   `[필수]` scale: 스케일 설정
            -   `[옵션]` center: x, y를 중심으로 중앙 정렬 (기본: true)
    -   `[옵션]` endOffset : 마지막 애니메이션 위치 미세조정
        -   `[필수]` x : offset x 값
        -   `[필수]` y : offset y 값
    -   `[필수]` duration : 시간 설정(단위: 초)

    ```javascript
    moveElement: {
        start: {
            x: 100,
            y: 100,
            img: { imgUrl: 'images/bat001.png', scale: 0.5, center: true }
        },
        end: {
            x: 700,
            y: 450,
            img: { imgUrl: 'images/bat001.png', scale: 0.5, center: true }
        },
        endOffset: { x: -50, y: 0 },
        duration: 0.5
    }
    ```

    <br />

-   > `[필수]` choice | _`object`_

    초이스 설정

    -   `[필수]` x : 초이스 전체 x 위치 설정
    -   `[필수]` y : 초이스 전체 y 위치 설정
    -   `[필수]` width : 초이스 개별 가로 길이 설정
    -   `[필수]` height : 초이스 개별 세로 길이 설정
    -   `[옵션]` center : 초이스 전체 x, y 중심으로 중앙 정렬 (기본: true)
    -   `[필수]` fontSize : 폰트 사이즈 설정
    -   `[필수]` textOffset : 텍스트 위치 미세 조정
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[필수]` hintCount : 힌트 수 설정
    -   `[필수]` hintOffset : 힌트 위치 미세 조정
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[필수]` defaultClass : 기본 상태 클래스 설정
    -   `[필수]` choiceClass : 선택(정답) 상태 클래스 설정
    -   `[필수]` nonActiveClass : 오답 상태 클래스 설정
    -   `[필수]` item : 텍스트 설정(이차원 배열(행렬 형태))
    -   `[필수]` answer : 정답 인덱스 설정(이차원 배열(행렬 형태))

    ```javascript
    choice: {
        x: 400,
        y: 270,
        width: 100,
        height: 80,
        // center: true,
        fontSize: 40,
        // textOffset: { x: 0, y: 0 },
        hintCount: 2,
        // hintOffset: { x: 0, y: 0 },
        defaultClass: {
            background: 'f08 s12',
            text: 'f01'
        },
        choiceClass: {
            background: 'f05 s12',
            text: 'f02'
        },
        nonActiveClass: {
            background: 'f07 s12',
            text: 'f12'
        },
        item: [
            ['Aa', 'Cc', 'Ff', 'Dd', 'Ee'],
            ['Bb', 'Dd', 'Bb', 'Cc', 'Ff'],
            ['Cc', 'Dd', 'Ee', 'Ff', 'Gg']
        ],
        answer: [
            [0, 0],
            [1, 0],
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
            [2, 4]
        ]
    }
    ```

    <br />

> ## EM000029

    음가 원리(개념 설명)

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000029',
        directive: { text: 'text_index_0' },
        main: {
            shape: {
                class: 'f02 s15',
                strokeWidth: 3,
                circle: {
                    cx: 400,
                    cy: 270,
                    radius: 50
                }
                // rect: {
                //     x: 400,
                //     y: 270,
                //     width: 50,
                //     height: 50,
                //     roundedCornerX: 5,
                //     roundedCornerY: 5
                //     // center: true
                // },
                // ellipse: {
                //     cx: 400,
                //     cy: 270,
                //     radiusX: 30,
                //     radiusY: 20
                // }
            },
            learningWord: {
                text: 'B',
                fontSize: 60,
                textClass: 'f11',
                textOffset: { x: 0, y: 0 }
            },
            hintOffset: { x: 0, y: 0 },
            soundUrl: 'sound_index_0'
        },
        choice: {
            common: {
                lineClass: 's16',
                lineStrokeWidth: 2,
                questionMarkClass: 'f02',
                questionMarkOffset: { x: 0, y: 0 },
                hintOffset: { x: 0, y: 0 }
            },
            item: [
                {
                    shape: {
                        class: { default: 'f16 s16', choice: 'f02 s16' },
                        strokeWidth: { default: 1, choice: 1 },
                        circle: { cx: 250, cy: 400, radius: 50 }
                        // rect
                        // ellipse
                    },
                    img: { imgUrl: 'image_index_0', scale: 0.5, center: true },
                    soundUrl: 'sound_index_1'
                },
                {
                    shape: {
                        class: { default: 'f16 s16', choice: 'f02 s16' },
                        strokeWidth: 1,
                        circle: { cx: 300, cy: 150, radius: 50 }
                        // rect
                        // ellipse
                    },
                    img: { imgUrl: 'image_index_1', scale: 0.5, center: true },
                    soundUrl: 'sound_index_2'
                },
                {
                    shape: {
                        class: { default: 'f16 s16', choice: 'f02 s16' },
                        strokeWidth: 1,
                        circle: { cx: 600, cy: 290, radius: 50 }
                        // rect
                        // ellipse
                    },
                    img: { imgUrl: 'image_index_2', scale: 0.5, center: true },
                    soundUrl: 'sound_index_3'
                }
            ]
        },
        okButton: {
            x: 700,
            y: 450,
            width: 65,
            height: 35
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000029';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` main | _`object`_

    메인 엘리먼트 설정

    -   `[옵션]` shape : 도형 설정
        -   `[필수]` class : 도형 클래스 설정
        -   `[필수]` strokeWidth : 도형 스트로크 굵기 설정
        -   `[옵션]` rect : 세부 속성은 createElement의 shape 참고
        -   `[옵션]` circle : 세부 속성은 createElement의 shape 참고
        -   `[옵션]` ellipse : 세부 속성은 createElement의 shape 참고
    -   `[필수]` learningWord : 학습 단어 설정
        -   `[필수]` text : 텍스트 설정
        -   `[필수]` fontSize : 폰트 사이즈 설정
        -   `[필수]` textClass : 텍스트 클래스 설정
        -   `[옵션]` textOffset : 텍스트 위치 미세 조정
            -   `[필수]` x : offset x값 설정
            -   `[필수]` y : offset y값 설정
    -   `[옵션]` hintOffset
        -   `[필수]` x : offset x값 설정
        -   `[필수]` y : offset y값 설정
    -   `[필수]` soundUrl : 사운드 인덱스 설정

    ```javascript
    main: {
        shape: {
            class: 'f02 s15',
            strokeWidth: 3,
            circle: {
                cx: 400,
                cy: 270,
                radius: 50
            }
            // rect: {
            //     x: 400,
            //     y: 270,
            //     width: 50,
            //     height: 50,
            //     roundedCornerX: 5,
            //     roundedCornerY: 5
            //     // center: true
            // },
            // ellipse: {
            //     cx: 400,
            //     cy: 270,
            //     radiusX: 30,
            //     radiusY: 20
            // }
        },
        learningWord: {
            text: 'B',
            fontSize: 60,
            textClass: 'f11',
            textOffset: { x: 0, y: 0 }
        },
        hintOffset: { x: 0, y: 0 },
        soundUrl: 'sound_index_0'
    },
    ```

    <br />

    -   > `[필수]` choice | _`array[object]`_

        초이스 설정

    -   `[조건]` common : 초이스 공통 속성 설정 (각 속성은 common 또는 item에 필수로 있어야 함)
        -   `[필수]` lineClass : 선 클래스 설정
        -   `[필수]` lineStrokeWidth : 선 스트로크 굵기 설정
        -   `[필수]` questionMarkClass : 물음표 표시 클래스 설정
        -   `[옵션]` questionMarkOffset : 물음표 표시 위치 미세 조정
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
        -   `[옵션]` hintOffset
        -   `[필수]` x : offset x 값 설정
        -   `[필수]` y : offset y 값 설정
    -   `[필수]` item : 초이스 아이템 설정
        -   `[필수]` shape : 도형 설정
            -   `[필수]` class : 도형 클래스 설정
            -   `[필수]` strokeWidth : 스토르크 굵기 설정
            -   `[옵션]` circle : 세부 속성은 createElement의 shape 참고
            -   `[옵션]` rect : 세부 속성은 createElement의 shape 참고
            -   `[옵션]` ellipse : 세부 속성은 createElement의 shape 참고
        -   `[필수]` img : 이미지 설정
            -   `[필수]` imgUrl : 이미지 인덱스 설정
            -   `[필수]` scale : 이미지 스케일 설정
            -   `[옵션]` center : 도형 중심으로 중앙 정렬 (기본: true)
        -   `[필수]` soundUrl : 사운드 인덱스 설정

    ```javascript
    choice: {
        common: {
            lineClass: 's16',
            lineStrokeWidth: 2,
            questionMarkClass: 'f02',
            questionMarkOffset: { x: 0, y: 0 },
            hintOffset: { x: 0, y: 0 }
        },
        item: [
            {
                shape: {
                    class: { default: 'f16 s16', choice: 'f02 s16' },
                    strokeWidth: { default: 1, choice: 1 },
                    circle: { cx: 250, cy: 400, radius: 50 }
                    // rect
                    // ellipse
                },
                img: { imgUrl: 'image_index_0', scale: 0.5, center: true },
                soundUrl: 'sound_index_1'
            }
        ]
    }
    ```

    <br />

> ## EM000030

    단어 완성

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000030',
        directive: { text: 'text_index_0' },
        dragAndDrop: {
            drag: {
                x: 200,
                y: 200,
                width: 80,
                height: 80,
                text: 'b',
                fontSize: 50,
                textOffset: { x: 0, y: 0 },
                dragClass: {
                    text: 'f01',
                    background: 'f17'
                },
                soundUrl: 'sound_index_0',
                hintOffset: { x: 25, y: -15 },
            },
            drop: {
                x: 500,
                y: 200,
                text: 'ball',
                dropIndex: 0,
                dropClass: {
                    text: 'f01',
                    background: 'f02 s16'
                }
            }
        },
        createElement: {
            image: [{ order: 0, x: 400, y: 270, imgUrl: 'image_index_0', scale: 0.85 }]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000030';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` dragAndDrop | _`object`_

    drag and drop 설정

    -   `[필수]` drag
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` width : 박스 가로 길이 설정
        -   `[필수]` height : 박스 세로 길이 설정
        -   `[필수]` text : 텍스트 설정
        -   `[필수]` fontSize : 폰트 사이즈 설정
        -   `[옵션]` textOffset : 텍스트 위치 미세 조정
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
        -   `[필수]` dragClass : 드래그 클래스 설정
            -   `[필수]` text : 텍스트 클래스 설정
            -   `[필수]` background : 백그라운드 클래스 설정
        -   `[옵션]` dragBackgroundAttributes : 백그라운드 attribute 설정
        -   `[필수]` soundUrl : 사운드 인덱스 설정
        -   `[옵션]` hintOffset : 힌트 위치 조정(hintOffset:false 시 힌트 제공 안함)
            -   `[필수]` x : offset x 값 설정
            -   `[필수]` y : offset y 값 설정
    -   `[필수]` drop
        -   `[필수]` x : x 위치 설정
        -   `[필수]` y : y 위치 설정
        -   `[필수]` text : 텍스트 설정
        -   `[필수]` dropIndex : 텍스트 중 박스로 만들 index 설정
        -   `[필수]` dropClass : 드랍 클래스 설정
            -   `[필수]` text : 텍스트 클래스 설정
            -   `[필수]` background : 백그라운드 클래스 설정
        -   `[옵션]` dropBackgroundAttributes : 백그라운드 attribute 설정

    ```javascript
    dragAndDrop: {
        drag: {
            x: 200,
            y: 200,
            width: 80,
            height: 80,
            text: 'b',
            fontSize: 50,
            textOffset: { x: 0, y: 0 },
            dragClass: {
                text: 'f01',
                background: 'f17'
            },
            dragBackgroundAttributes: {},
            soundUrl: 'sound_index_0',
            hintOffset: { x: 25, y: -15 }
        },
        drop: {
            x: 500,
            y: 200,
            text: 'ball',
            dropIndex: 0,
            dropClass: {
                text: 'f01',
                background: 'f02 s16'
            },
            dropBackgroundAttributes: {}
        }
    },
    ```

    <br />

> ## EM000031

    step1) 단어 완성
    step2) 녹음

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000031',
        directive: { text: 'text_index_0' },
        step1: {
            dragAndDrop: {
                drag: {
                    common: {
                        width: 80,
                        height: 80,
                        fontSize: 50,
                        center: true,
                        textOffset: { x: 0, y: 0 },
                        textClass: 'f01',
                        backgroundClass: 'f17 s12',
                        activeClass: {
                            text: 'f01',
                            background: 'f17 s12'
                        },
                        nonActiveClass: {
                            text: 'f14',
                            background: 'f12'
                        },
                        activeAttributes: {
                            background: {}
                        },
                        nonActiveAttibutes: {
                            background: {}
                        }
                    },
                    item: [
                        {
                            x: 150,
                            y: 150,
                            text: 'b',
                            answer: true
                            // hintOffset: { x: 0, y: 0 }
                        },
                        { x: 150, y: 250, text: 'd' },
                        { x: 150, y: 350, text: 'f' }
                    ]
                },
                drop: {
                    x: 500,
                    y: 300,
                    width: 80,
                    height: 80,
                    center: true,
                    text: 'ball',
                    fontSize: 50,
                    textOffest: { x: 0, y: 0 },
                    dropIndex: 0,
                    dropClass: {
                        text: 'f01',
                        background: 'f02 s16'
                    },
                    dropBackgroundAttributes: {}
                }
            }
        },
        step2: {
            directive: { text: 'Listen and repeat.' },
            soundButton: {
                soundUrl: 'sounds/bat.mp3',
                speakerImage: { imgUrl: 'images/E1speaker.svg', scale: 1 },
                innerImage: { imgUrl: 'images/bat001.png', scale: 0.8, offset: { x: -125, y: 0 } },
                innerText: { text: '$highlight{b}at', offset: { x: 125, y: 0 }, fontSize: 100, highlightClass: 'fE1red', textClass: '' }
            },
            record: {
                scale: 0.7,
                activeRecordImgUrl: 'images/icon_07.svg',
                activePlayImgUrl: 'images/icon_09.svg',
                activeEndImgUrl: 'images/icon_05.svg',
                activeRecordStopImgUrl: 'images/icon_13.svg',
                activePlayStopImgUrl: 'images/icon_13.svg',
                nonActiveRecordImgUrl: 'images/icon_08.svg',
                nonActivePlayImgUrl: 'images/icon_10.svg',
                nonActiveEndImgUrl: 'images/icon_06.svg'
            }
        },
        createElement: {
            image: [{ x: 500, y: 200, scale: 0.5, imgUrl: 'images/bat001.png' }]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000031';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` step1 | _`object`_

    step1 설정

    -   `[필수]` dragAndDrop : 드래그 & 드랍 설정

        -   `[필수]` drag : 드래그 설정

            -   `[조건]` common : 초이스의 공통 속성 설정 (각 속성은 common or items 둘 중 하나에는 필수로 들어가야함)

                -   `[필수]` width
                -   `[필수]` height
                -   `[필수]` fontSize
                -   `[옵션]` center
                -   `[옵션]` textOffset
                -   `[옵션]` textClass
                -   `[옵션]` backgroundClass
                -   `[필수]` activeClass
                -   `[필수]` nonActiveClass
                -   `[필수]` activeAttributes
                -   `[필수]` nonActiveAttibutes

            -   `[필수]` item
                -   `[필수]` x
                -   `[필수]` y
                -   `[필수]` text
                -   `[필수]` answer
                -   `[옵션]` hintOffset : (hintOffset : false 시 힌트 비활성화)
                -   `[옵션]` common 속성

        -   `[필수]` drop
            -   `[필수]` x
            -   `[필수]` y
            -   `[필수]` width
            -   `[필수]` height
            -   `[옵션]` center
            -   `[필수]` text
            -   `[필수]` fontSize
            -   `[필수]` textOffset
            -   `[필수]` dropIndex
            -   `[필수]` dropClass
                -   `[필수]` text
                -   `[필수]` background
            -   `[필수]` dropBackgroundAttributes

    ```javascript
     step1: {
        dragAndDrop: {
            drag: {
                common: {
                    width: 80,
                    height: 80,
                    fontSize: 50,
                    center: true,
                    textOffset: { x: 0, y: 0 },
                    textClass: 'f01',
                    backgroundClass: 'f17 s12',
                    activeClass: {
                        text: 'f01',
                        background: 'f17 s12'
                    },
                    nonActiveClass: {
                        text: 'f14',
                        background: 'f12'
                    },
                    activeAttributes: {
                        background: {}
                    },
                    nonActiveAttibutes: {
                        background: {}
                    }
                },
                item: [
                    {
                        x: 150,
                        y: 150,
                        text: 'b',
                        answer: true
                        // hintOffset: { x: 0, y: 0 }
                    },
                    { x: 150, y: 250, text: 'd' },
                    { x: 150, y: 350, text: 'f' }
                ]
            },
            drop: {
                x: 500,
                y: 300,
                width: 80,
                height: 80,
                center: true,
                text: 'ball',
                fontSize: 50,
                textOffest: { x: 0, y: 0 },
                dropIndex: 0,
                dropClass: {
                    text: 'f01',
                    background: 'f02 s16'
                },
                dropBackgroundAttributes: {}
            }
        }
    }
    ```

    <br />

> ## EM000032

    듣고 알맞은 것끼리 고르기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000032',
        directive: { text: 'text_index_0' },
        line: {
            class: 's18',
            attributes: { strokeWidth: '2' },
            duration: 0.35
        },
        hintCount: 1,
        choice: {
            common: {
                width: 130,
                height: 100,
                backgroundClass: {
                    default: 'f02 s04',
                    choice: 'f14 s04',
                    nonActive: 'f05 s04'
                },
                backgroundAttributes: {
                    default: { rx: 10 },
                    choice: { rx: 10 },
                    nonActive: { rx: 10 }
                },
                speakerImgOffset: { x: 0, y: 0 }
            },
            items: [
                {
                    x: 150,
                    y: 150,
                    innerImage: { url: 'image_index_0', scale: 0.5, imgOffset: { x: 0, y: 0 } },
                    sound: { url: 'sound_index_0' },
                    dotOffset: { x: 0, y: 60 },
                    answerIndex: 2
                },
                {
                    x: 400,
                    y: 150,
                    innerImage: { url: 'image_index_1', scale: 0.35, imgOffset: { x: 0, y: 0 } },
                    sound: { url: 'sound_index_1' },
                    dotOffset: { x: 0, y: 60 },
                    answerIndex: 1
                },
                {
                    x: 650,
                    y: 150,
                    innerImage: { url: 'image_index_2', scale: 0.3, imgOffset: { x: 0, y: 0 } },
                    sound: { url: 'sound_index_2' },
                    dotOffset: { x: 0, y: 60 },
                    answerIndex: 0
                },
                {
                    x: 150,
                    y: 400,
                    innerImage: { url: 'image_index_3', scale: 0.2, imgOffset: { x: 0, y: 0 } },
                    sound: { url: 'sound_index_3' },
                    dotOffset: { x: 0, y: -60 },
                    answerIndex: 0
                },
                {
                    x: 400,
                    y: 400,
                    innerImage: { url: 'image_index_4', scale: 0.2, imgOffset: { x: 0, y: 0 } },
                    sound: { url: 'sound_index_4' },
                    dotOffset: { x: 0, y: -60 },
                    answerIndex: 2
                },
                {
                    x: 650,
                    y: 400,
                    innerImage: { url: 'image_index_5', scale: 0.15, imgOffset: { x: 0, y: 0 } },
                    sound: { url: 'sound_index_5' },
                    dotOffset: { x: 0, y: -60 },
                    answerIndex: 1
                }
            ]
        },
        oppositeChoice: {
            common: {
                width: 50,
                height: 50,
                fontSize: 30,
                textClass: {
                    default: 'f01',
                    choice: 'f02',
                    nonActive: 'f01'
                },
                textOffset: { x: 0, y: 0 },
                backgroundAttributes: {
                    default: { rx: 25 },
                    choice: { rx: 25 },
                    nonActive: { rx: 25 }
                },
                dotOffset: [
                    {
                        targetIndex: [0, 1, 2],
                        offset: { x: 0, y: -35 }
                    },
                    {
                        targetIndex: [3, 4, 5],
                        offset: { x: 0, y: 35 }
                    }
                ]
            },
            item: [
                {
                    x: 150,
                    y: 275,
                    text: 'Bb',
                    backgroundClass: {
                        default: 'f02 s04',
                        choice: 'f23 s04',
                        nonActive: 'f02 s04'
                    }
                },
                {
                    x: 400,
                    y: 275,
                    text: 'Dd',
                    backgroundClass: {
                        default: 'f02 s04',
                        choice: 'f24 s04',
                        nonActive: 'f02 s04'
                    }
                },
                {
                    x: 650,
                    y: 275,
                    text: 'Ff',
                    backgroundClass: {
                        default: 'f02 s04',
                        choice: 'f25 s04',
                        nonActive: 'f02 s04'
                    }
                }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000032';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` line | _`object`_

    라인 설정

    -   `[옵션]` class
    -   `[옵션]` attributes
    -   `[필수]` duration

    ```javascript
    line: {
        class: 's18',
        attributes: { strokeWidth: '2' },
        duration: 0.35
    }
    ```

    <br />

-   > `[옵션]` hintCount | _`number`_

    힌트 제공 횟수 설정 (기본: 0)

    ```javascript
    hintCount: 1;
    ```

    <br />
    ```

-   > `[필수]` choice | _`object`_

    초이스 설정

    -   `[조건]` common : 초이스 공통 속성 설정 (각 속성은 common 또는 item에 필수로 있어야 함)
        -   `[필수]` width
        -   `[필수]` height
        -   `[필수]` backgroundClass
            -   `[필수]` default
            -   `[필수]` choice
            -   `[필수]` nonActive
        -   `[필수]` backgroundAttributes
            -   `[필수]` default
            -   `[필수]` choice
            -   `[필수]` nonActive
        -   `[조건]` speakerImgOffset
        -   `[조건]` speakerScale
    -   `[필수]` items : 초이스 아이템 설정
        -   `[필수]` x
        -   `[필수]` y
        -   `[필수]` innerImage
            -   `[필수]` url
            -   `[필수]` scale
            -   `[옵션]` imgOffset
        -   `[필수]` sound
            -   `[필수]` url
            -   `[옵션]` imgOffset
            -   `[필수]` scale
        -   `[필수]` dotOffset
        -   `[필수]` answerIndex

    ```javascript
    choice: {
        common: {
            width: 130,
            height: 100,
            backgroundClass: {
                default: 'f02 s04',
                choice: 'f14 s04',
                nonActive: 'f05 s04'
            },
            backgroundAttributes: {
                default: { rx: 10 },
                choice: { rx: 10 },
                nonActive: { rx: 10 }
            },
            speakerImgOffset: { x: 0, y: 0 },
            speakerScale: 1
        },
        items: [
            {
                x: 150,
                y: 150,
                innerImage: { url: 'images/bat001.png', scale: 0.5, imgOffset: { x: 0, y: 0 } },
                sound: { url: 'sounds/bat.mp3', speakerImgOffset: {x: 0, y: 0}, scale: 1 },
                dotOffset: { x: 0, y: 60 },
                answerIndex: 2
            }
        ]
    },
    ```

    <br />

-   > `[필수]` oppositeChoice | _`object`_

    반대 초이스 설정

    -   `[조건]` common : 초이스 공통 속성 설정 (각 속성은 common 또는 item에 필수로 있어야 함)
        -   `[필수]` width
        -   `[필수]` height
        -   `[필수]` fontSize
        -   `[필수]` textClass
            -   `[필수]` default
            -   `[필수]` choice
            -   `[필수]` nonActive
        -   `[필수]` textOffset
        -   `[필수]` backgroundAttributes
            -   `[필수]` default
            -   `[필수]` choice
            -   `[필수]` nonActive
        -   `[필수]` dotOffset
            -   `[필수]` targetIndex : 연결 될 메인 초이스 대상
            -   `[필수]` offset
    -   `[조건]` item
        -   `[필수]` x
        -   `[필수]` y
        -   `[필수]` text
        -   `[필수]` backgroundClass

    ```javascript
    oppositeChoice: {
        common: {
            width: 50,
            height: 50,
            fontSize: 30,
            textClass: {
                default: 'f01',
                choice: 'f02',
                nonActive: 'f01'
            },
            textOffset: { x: 0, y: 0 },
            backgroundAttributes: {
                default: { rx: 25 },
                choice: { rx: 25 },
                nonActive: { rx: 25 }
            },
            dotOffset: [
                {
                    targetIndex: [0, 1, 2],
                    offset: { x: 0, y: -35 }
                },
                {
                    targetIndex: [3, 4, 5],
                    offset: { x: 0, y: 35 }
                }
            ]
        },
        item: [
            {
                x: 150,
                y: 275,
                text: 'Bb',
                backgroundClass: {
                    default: 'f02 s04',
                    choice: 'f23 s04',
                    nonActive: 'f02 s04'
                }
            }
        ]
    }
    ```

    <br />

> ## EM000033

    알맞은 것 고르기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000033',
        directive: { text: 'text_index_0' },
        learningWord: {
            text: 'Bb',
            fontSize: 50,
            textClass: 'f02',
            textOffset: { x: 0, y: 0 },
            shape: {
                circle: {
                    cx: 130,
                    cy: 230,
                    radius: 50
                },
                shapeClass: 'f23 s23',
                shapeAttributes: {}
            }
        },
        choice: {
            x: 420,
            y: 230,
            width: 150,
            height: 100,
            center: true,
            rows: 3,
            columns: 3,
            hintCount: 2,
            hintOffset: { x: 45, y: 25 },
            common: {
                front: {
                    backgroundClass: {
                        default: 'f02 s12',
                        choice: 'f10 s12'
                    },
                    backgroundAttributes: {}
                },
                back: {
                    fontSize: 40,
                    textOffset: { x: 0, y: 0 },
                    textClass: {
                        default: 'f02',
                        nonActive: 'f019'
                    }
                },
                flipDuration: 0.75,
                hiddenScrrenClass: 'f023 s019'
            },
            items: [
                {
                    front: {
                        imgUrl: 'image_index_0',
                        soundUrl: 'sound_index_0',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Bb',
                        backgroundClass: {
                            default: 'f23 s23',
                            nonActive: 'f009 s12'
                        },
                        textClass: {
                            default: 'f02',
                            nonActive: 'f019'
                        }
                    },
                    answer: true
                },
                {
                    front: {
                        imgUrl: 'image_index_1',
                        soundUrl: 'sound_index_1',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Ff',
                        backgroundClass: {
                            default: 'f25 s25',
                            nonActive: 'f04 s12'
                        }
                    }
                },
                {
                    front: {
                        imgUrl: 'image_index_2',
                        soundUrl: 'sound_index_2',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Dd',
                        backgroundClass: {
                            default: 'f24 s24',
                            nonActive: 'f04 s12'
                        }
                    }
                },
                {
                    front: {
                        imgUrl: 'image_index_3',
                        soundUrl: 'sound_index_3',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Ff',
                        backgroundClass: {
                            default: 'f25 s25',
                            nonActive: 'f04 s12'
                        }
                    }
                },
                {
                    front: {
                        imgUrl: 'image_index_4',
                        soundUrl: 'sound_index_4',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Bb',
                        backgroundClass: {
                            default: 'f23 s23',
                            nonActive: 'f04 s12'
                        }
                    },
                    answer: true
                },
                {
                    front: {
                        imgUrl: 'image_index_5',
                        soundUrl: 'sound_index_5',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Ff',
                        backgroundClass: {
                            default: 'f25 s25',
                            nonActive: 'f04 s12'
                        }
                    }
                },
                {
                    front: {
                        imgUrl: 'image_index_6',
                        soundUrl: 'sound_index_6',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Dd',
                        backgroundClass: {
                            default: 'f24 s24',
                            nonActive: 'f04 s12'
                        }
                    }
                },
                {
                    front: {
                        imgUrl: 'image_index_7',
                        soundUrl: 'sound_index_7',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Dd',
                        backgroundClass: {
                            default: 'f24 s24',
                            nonActive: 'f04 s12'
                        }
                    }
                },
                {
                    front: {
                        imgUrl: 'image_index_8',
                        soundUrl: 'sound_index_8',
                        scale: 0.3,
                        imgOffset: { x: 0, y: 0 }
                    },
                    back: {
                        text: 'Bb',
                        backgroundClass: {
                            default: 'f23 s23',
                            nonActive: 'f04 s12'
                        }
                    },
                    answer: true
                }
            ]
        },
        okButton: { x: undefined, y: undefined }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    // DEFAULT
    questionType: 'EM000033';
    ```

    <br />

-   > `[필수]` directive | _`object`_

    지시문 설정  
    자세한 내용은 공통 속성 참조

    <br />

-   > `[필수]` learningWord | _`object`_

    학습 단어 설정

    -   `[필수]` text
    -   `[필수]` fontSize
    -   `[필수]` textClass
    -   `[옵션]` textOffset
    -   `[필수]` shape
        -   `[옵션]` circle | rect | ellipse
        -   `[옵션]` shapeClass
        -   `[옵션]` shapeAttributes

    ```javascript
    learningWord: {
        text: 'Bb',
        fontSize: 50,
        textClass: 'f02',
        textOffset: { x: 0, y: 0 },
        shape: {
            circle: {
                cx: 130,
                cy: 230,
                radius: 50
            },
            shapeClass: 'f23 s23',
            shapeAttributes: {}
        }
    }
    ```

    <br />

-   > `[필수]` choice | _`object`_

    초이스 설정

    -   `[필수]` x
    -   `[필수]` y
    -   `[필수]` width
    -   `[필수]` height
    -   `[옵션]` center
    -   `[필수]` rows
    -   `[필수]` columns
    -   `[옵션]` hintCount
    -   `[옵션]` hintOffset
    -   `[조건]` common
        -   `[필수]` front
            -   `[필수]` backgroundClass
            -   `[옵션]` backgroundAttributes
        -   `[필수]` back
            -   `[필수]` fontSize
            -   `[필수]` textOffset
            -   `[옵션]` textClass
        -   `[필수]` flipDuration
        -   `[필수]` hiddenScreenClass
        -   `[옵션]` hiddenScreenAttributes
    -   `[조건]` items
        -   `[필수]` front
            -   `[필수]` imgUrl
            -   `[필수]` soundUrl
            -   `[필수]` scale
            -   `[조건]` imgOffset
        -   `[필수]` back
            -   `[필수]` text
        -   `[조건]` answer

    ```javascript
    choice: {
        x: 420,
        y: 230,
        width: 150,
        height: 100,
        center: true,
        rows: 3,
        columns: 3,
        hintCount: 2,
        hintOffset: { x: 45, y: 25 },
        common: {
            front: {
                backgroundClass: {
                    default: 'f02 s12',
                    choice: 'f10 s12'
                },
                backgroundAttributes: {},
            },
            back: {
                fontSize: 40,
                textOffset: { x: 0, y: 0 },
                textClass: {
                    default: 'f02',
                    nonActive: 'f019'
                }
            },
            flipDuration: 0.75,
            hiddenScrrenClass: 'f023 s019',
            hiddenScreenAttributes: {}
        },
        items: [
            {
                front: {
                    imgUrl: 'images/bat001.png',
                    soundUrl: 'sounds/bat.mp3',
                    scale: 0.3,
                    imgOffset: { x: 0, y: 0 }
                },
                back: {
                    text: 'Bb',
                    backgroundClass: {
                        default: 'f23 s23',
                        nonActive: 'f009 s12'
                    },
                    textClass: {
                        default: 'f02',
                        nonActive: 'f019'
                    }
                },
                answer: true
            }
        },
    }
    ```

    <br />

-   > `[옵션]` okButton | _`object`_

    ok 버튼 위치 설정 (기본: {x: 735, y: 405})

    ```javascript
    okButton: { x: undefined, y: undefined }
    ```

    <br />

> ## EM000043

    레터 카드

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000043',
        directive: { text: 'text_index_0' },
        flipHintOffset: { x: 0, y: 0 },
        arrowHintOffset: { x: 0, y: 0 },
        hintCount: 1,
        swipe: {
            rightArrow: { x: 760, y: 225 },
            leftArrow: { x: 20, y: 225 },
            duration: 0.5,
            effectSoundUrl: 'sound_index_5',
            navigator: { x: 400, y: 440, center: true, gap: 40, radius: 7.5, class: { active: 'f003', nonActive: 'f005' } }
        },
        cards: {
            x: 80,
            y: 90,
            gap: 20,
            width: 310,
            height: 310,
            flipDuration: 0.5,
            effectSoundUrl: 'sound_index_5',
            common: {
                front: {
                    backgroundClass: 'f02',
                    backgroundAttributes: {},
                    backgroundShadow: true,
                    fontSize: 200,
                    textClass: 'f011 s011',
                    textOffset: { x: 0, y: 0 }
                },
                back: {
                    backgroundClass: 'f02 s002',
                    backgroundAttributes: { strokeWidth: 5 },
                    imgOffset: { x: 0, y: -50 },
                    fontSize: 80,
                    textClass: 'f01',
                    textHighlightClass: 'f011',
                    textOffset: { x: 0, y: 80 }
                }
            },
            items: [
                {
                    front: { text: 'Aa', soundUrl: 'sound_index_0' },
                    back: { text: '$highlight{a}pple', imgUrl: 'image_index_0', imgScale: 0.3, soundUrl: 'sound_index_1' }
                },
                {
                    front: { text: 'Bb', soundUrl: 'sound_index_2' },
                    back: { text: '$highlight{b}anana', imgUrl: 'image_index_1', imgScale: 0.7, soundUrl: 'sound_index_3' }
                },
                {
                    front: { text: 'Cc', soundUrl: 'sound_index_0' },
                    back: { text: '$highlight{c}at', imgUrl: 'image_index_2', imgScale: 0.9, soundUrl: 'sound_index_1' }
                },
                {
                    front: { text: 'Dd', soundUrl: 'sound_index_2' },
                    back: { text: '$highlight{d}og', imgUrl: 'image_index_3', imgScale: 0.8, soundUrl: 'sound_index_3' }
                },
                {
                    front: { text: 'Ee', soundUrl: 'sound_index_0' },
                    back: { text: '$highlight{c}hild', imgUrl: 'image_index_4', imgScale: 0.9, soundUrl: 'sound_index_1' }
                }
            ]
        },
        okButtonPoint: {}
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000043';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000040

    쓰기

-   ### 기본 포맷

    ```javascript
        {
        questionType: 'EM000040',
        directive: { text: 'text_index_0' },
        soundUrl: 'sound_index_0',
        container: {
            buttonClass: 'f02 s04',
            innerImage: { imgUrl: 'image_index_0', scale: 0.7 },
            type: 'short'
        },
        area: { areaClass: 'f02' },
        write: {
            answer: 'BAE',
            scale: 2,
            offset: { x: 0, y: 0 },
            gap: 0
            // writeClass: '',
            // okButtonPoint: { x: 400, y: 440 },
            // helpButtonOffset: { x: 0, y: 0 },
            // undoButtonOffset: { x: 0, y: 0 },
            // trashButtonOffset: { x: 0, y: 0 }
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000040';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000043

    레터 카드

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000043',
        directive: { text: 'text_index_0' },
        flipHintOffset: { x: 0, y: 0 },
        arrowHintOffset: { x: 0, y: 0 },
        swipe: {
            rightArrow: { x: 760, y: 225 },
            leftArrow: { x: 20, y: 225 },
            duration: 1,
            navigator: {
                x: 400,
                y: 440,
                center: true,
                gap: 40,
                radius: 7.5,
                class: {
                    active: 'f003',
                    nonActive: 'f005'
                }
            }
        },
        cards: {
            x: 70,
            y: 80,
            gap: 20,
            width: 320,
            height: 320,
            common: {
                front: {
                    backgroundClass: 'f02',
                    backgroundAttributes: {},
                    backgroundShadow: true,
                    fontSize: 200,
                    textClass: 'f011 s011',
                    textOffset: { x: 0, y: 0 }
                },
                back: {
                    backgroundClass: 'f02 s002',
                    backgroundAttributes: {
                        strokeWidth: 10
                    },
                    imgOffset: { x: 0, y: -60 },
                    fontSize: 80,
                    textClass: 'f01',
                    textHighlightClass: 'f011',
                    textOffset: { x: 0, y: 80 }
                }
            },
            items: [
                {
                    front: { text: 'Aa', soundUrl: 'sound_index_0' },
                    back: { text: '$highlight{a}pple', imgUrl: 'image_index_0', imgScale: 1, soundUrl: 'sound_index_1' }
                },
                {
                    front: { text: 'Bb', soundUrl: 'sound_index_2' },
                    back: { text: '$highlight{b}oy', imgUrl: 'image_index_1', imgScale: 1, soundUrl: 'sound_index_3' }
                },
                {
                    front: { text: 'Cc', soundUrl: 'sound_index_0' },
                    back: { text: '$highlight{c}hild', imgUrl: 'image_index_0', imgScale: 1, soundUrl: 'sound_index_1' }
                },
                {
                    front: { text: 'Dd', soundUrl: 'sound_index_2' },
                    back: { text: '$highlight{c}hild', imgUrl: 'image_index_1', imgScale: 1, soundUrl: 'sound_index_3' }
                },
                {
                    front: { text: 'Ee', soundUrl: 'sound_index_0' },
                    back: { text: '$highlight{c}hild', imgUrl: 'image_index_0', imgScale: 1, soundUrl: 'sound_index_1' }
                }
            ]
        },
        okButtonPoint: { x: undefined, y: undefined }
    }
    ```

    ```javascript
     {
        questionType: 'EM000043',
        directive: { text: 'text_index_0' },
        flipHintOffset: { x: 0, y: 0 },
        arrowHintOffset: { x: 0, y: 0 },
        swipe: {
            rightArrow: { x: 760, y: 225 },
            leftArrow: { x: 20, y: 225 },
            duration: 1,
            navigator: {
                x: 400,
                y: 440,
                center: true,
                gap: 40,
                radius: 7.5,
                class: {
                    active: 'f003',
                    nonActive: 'f005'
                }
            }
        },
        cards: {
            x: 70,
            y: 80,
            gap: 20,
            width: 320,
            height: 320,
            common: {
                front: {
                    backgroundClass: 'f02 s002',
                    backgroundAttributes: {
                        strokeWidth: 10
                    },
                    imgOffset: { x: 0, y: -60 },
                    fontSize: 80,
                    textClass: 'f011 s011',
                    textOffset: { x: 0, y: 80 }
                },
                back: {
                    backgroundClass: 'f02 s002',
                    backgroundAttributes: {
                        strokeWidth: 10
                    },
                    imgOffset: { x: 0, y: -60 },
                    fontSize: 80,
                    textClass: 'f01',
                    textHighlightClass: 'f011',
                    textOffset: { x: 0, y: 80 }
                }
            },
            items: [
                {
                    soundUrl: 'sound_index_0',
                    front: { text: '$highlight{a}pple', imgUrl: 'image_index_0', imgScale: 0.3 },
                    back: { text: '사과', imgUrl: 'image_index_0', imgScale: 0.3 }
                },
                {
                    soundUrl: 'sound_index_1',
                    front: { text: '$highlight{b}oy', imgUrl: 'image_index_1', imgScale: 0.3 },
                    back: { text: '소년', imgUrl: 'image_index_1', imgScale: 0.3 }
                },
                {
                    soundUrl: 'sound_index_2',
                    front: { text: '$highlight{a}pple2', imgUrl: 'image_index_0', imgScale: 0.3 },
                    back: { text: '사과2', imgUrl: 'image_index_0', imgScale: 0.3 }
                },
                {
                    soundUrl: 'sound_index_3',
                    front: { text: '$highlight{b}oy2', imgUrl: 'image_index_1', imgScale: 0.3 },
                    back: { text: '소년2', imgUrl: 'image_index_1', imgScale: 0.3 }
                },
                {
                    soundUrl: 'sound_index_4',
                    front: { text: '$highlight{a}pple3', imgUrl: 'image_index_0', imgScale: 0.3 },
                    back: { text: '사과3', imgUrl: 'image_index_0', imgScale: 0.3 }
                }
            ]
        },
        okButtonPoint: { x: undefined, y: undefined }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000043';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000044

    낱자의 형태 확인

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000044',
        directive: { text: 'text_index_0' },
        hintCount: 1,
        choice: {
            common: {
                fontSize: 80,
                textShadow: true,
                centerX: true,
                textClass: {
                    default: 'f02 bold',
                    choice: 'f14 bold',
                    nonActive: 'f005 bold'
                }
            },
            items: [
                {
                    x: 100,
                    y: 150,
                    text: 'A',
                    answer: true
                },
                {
                    x: 200,
                    y: 150,
                    text: '$'
                },
                {
                    x: 300,
                    y: 150,
                    text: 'V'
                },
                {
                    x: 100,
                    y: 250,
                    text: '&'
                },
                {
                    x: 200,
                    y: 250,
                    text: '4'
                },
                {
                    x: 300,
                    y: 250,
                    text: 'A',
                    answer: true
                }
            ]
        },
        createElement: {
            image: [{ order: 0, x: 400, y: 270, scale: 1, imgUrl: 'image_index_0' }]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000044';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000045

    낱자 형태 알기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000045',
        directive: { text: 'text_index_0' },
        hintCount: 1,
        hintOffset: { x: 0, y: 0 },
        choice: {
            common: {
                fontSize: 50,
                textClass: 'f01',
                textOffset: { x: 0, y: 20 },
                backgroundImage: {
                    imgUrl: 'image_index_1',
                    imgScale: 0.5
                },
                hiddenTime: 0.4,
                soundUrl: 'sound_index_0',
                effectSoundUrl: 'sound_index_1'
            },
            items: [
                {
                    x: 100,
                    y: 400,
                    text: 'a',
                    answer: true,
                    moveEndPoint: { x: 100, y: 100 }
                },
                {
                    x: 200,
                    y: 400,
                    text: 'e',
                    reverse: 'v'
                },
                {
                    x: 300,
                    y: 400,
                    text: 'a',
                    reverse: 'h'
                },
                {
                    x: 400,
                    y: 400,
                    text: 'a',
                    answer: true,
                    moveEndPoint: { x: 400, y: 100 }
                }
            ]
        },
        createElement: {
            image: [{ order: 0, x: 400, y: 270, scale: 1, imgUrl: 'image_index_0' }]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000045';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000046

    대소문자 짝글자 형태 확인

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000046',
        directive: { text: 'text_index_0' },
        learningWord: 'A',
        trace: {
            x: 400,
            y: 190,
            centerX: true,
            scale: 4,
            gap: 0,
            sensitive: 50,
            fillStrokeClass: 'fno s05',
            backgroundClass: 'f12',
            endFillStrokeClass: 'fno s01',
            upperCase: {
                img: { x: 120, y: 190, imgUrl: 'image_index_0', imgScale: 0.5 },
                translateX: 150,
                translateDuration: 1,
                soundUrl: 'sound_index_0'
            },
            lowerCase: {
                img: { x: 450, y: 190, imgUrl: 'image_index_1', imgScale: 1 },
                translateX: -150,
                translateDuration: 1,
                soundUrl: 'sound_index_1'
            }
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000046';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000047

    - 알맞은 것끼리 고르기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000047',
        directive: { text: 'text_index_0' },
        hintCount: 1,
        hintOffset: { choice: { x: 0, y: 0 }, oppositeChoice: { x: 0, y: 0 } },
        choice: {
            common: {
                fontSize: 50,
                textClass: { default: 'f01', choice: 'f14' },
                textOffset: { x: 10, y: -10 },
                image: { url: 'image_index_2', scale: 0.2 }
            },
            items: [
                { x: 120, y: 140, text: 'B', soundUrl: 'sound_index_0' },
                { x: 300, y: 160, text: 'A', soundUrl: 'sound_index_1' },
                { x: 490, y: 120, text: 'F', soundUrl: 'sound_index_2' },
                { x: 680, y: 160, text: 'E', soundUrl: 'sound_index_3' }
            ]
        },
        oppositeChoice: {
            common: {
                fontSize: 50,
                textClass: { default: 'f01', choice: 'f14' },
                textOffset: { x: 0, y: 15 },
                image: { url: 'image_index_4', scale: 0.45 },
                moveEndOffset: { x: 0, y: -50 },
                moveDuration: 1
            },
            items: [
                { x: 100, y: 400, text: 'f' },
                { x: 300, y: 400, text: 'a' },
                { x: 500, y: 400, text: 'e' },
                { x: 700, y: 400, text: 'b' }
            ]
        }
    },
    {
        questionType: 'EM000047',
        directive: { text: 'text_index_0' },
        hintCount: 1,
        hintOffset: { choice: { x: 0, y: 0 }, oppositeChoice: { x: 0, y: 0 } },
        choice: {
            common: {
                fontSize: 50,
                textClass: { default: 'f01', choice: 'f14' },
                textOffset: { x: 10, y: -10 },
                image: { url: 'image_index_2', scale: 0.2 }
            },
            items: [
                { x: 120, y: 140, text: 'B', soundUrl: 'sound_index_0' },
                { x: 300, y: 160, text: 'A', soundUrl: 'sound_index_1' },
                { x: 490, y: 120, text: 'F', soundUrl: 'sound_index_2' },
                { x: 680, y: 160, text: 'E', soundUrl: 'sound_index_3' }
            ]
        },
        oppositeChoice: {
            common: {
                fontSize: 50,
                textClass: { default: 'f01', choice: 'f14' },
                textOffset: { x: 0, y: 15 },
                image: { url: 'image_index_3', scale: 0.45 },
                moveEndOffset: { x: 0, y: -50 },
                moveDuration: 1
            },
            items: [
                { x: 100, y: 400, text: 'f' },
                { x: 300, y: 400, text: 'a' },
                { x: 500, y: 400, text: 'e' },
                { x: 700, y: 400, text: 'b' }
            ]
        }
    },
    {
        questionType: 'EM000047',
        directive: { text: 'text_index_0' },
        hintCount: 1,
        hintOffset: { choice: { x: 0, y: 0 }, oppositeChoice: { x: 0, y: 0 } },
        choice: {
            common: {
                fontSize: 50,
                textClass: { default: 'f01', choice: 'f14' },
                textOffset: { x: 0, y: 0 },
                image: { url: 'image_index_5', scale: 0.5 }
            },
            items: [
                { x: 120, y: 140, text: 'B', soundUrl: 'sound_index_0' },
                { x: 300, y: 160, text: 'A', soundUrl: 'sound_index_1' },
                { x: 490, y: 120, text: 'F', soundUrl: 'sound_index_2' },
                { x: 680, y: 160, text: 'E', soundUrl: 'sound_index_3' }
            ]
        },
        oppositeChoice: {
            common: {
                fontSize: 50,
                textClass: { default: 'f01', choice: 'f14' },
                textOffset: { x: -5, y: 0 },
                image: { url: 'image_index_6', scale: 0.45 },
                moveEndOffset: { x: -30, y: -100 },
                moveDuration: 1
            },
            items: [
                { x: 100, y: 400, text: 'f' },
                { x: 300, y: 400, text: 'a' },
                { x: 500, y: 400, text: 'e' },
                { x: 700, y: 400, text: 'b' }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000047';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000048

    낱자의 형태 알기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000048',
        directive: { text: 'text_index_0' },
        hintCount: 1,
        hintOffset: { x: 0, y: 0 },
        choice: {
            common: {
                textClass: 'f01',
                fontSize: 40,
                textOffset: { x: 0, y: 0 },
                image: { default: { scale: '0.2' }, choice: { scale: 0.2 } }
            },
            items: [
                {
                    x: 180,
                    y: 160,
                    text: 'A',
                    image: { default: { imgUrl: 'image_index_0' }, choice: { imgUrl: 'image_index_1' } },
                    answer: true
                },
                { x: 330, y: 230, text: 'B', image: { default: { imgUrl: 'image_index_0' }, choice: { imgUrl: 'image_index_1' } } },
                {
                    x: 495,
                    text: 'A',
                    image: { default: { imgUrl: 'image_index_0' }, choice: { imgUrl: 'image_index_1' } },
                    answer: true,
                    y: 120
                }
            ]
        },
        soundUrl: 'sound_index_0',
        effectSound: { default: 'sound_index_1', choice: 'sound_index_1' }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000048';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000049

    낱자 형태 알기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000049',
        directive: { text: 'text_index_0' },
        focusShow: false,
        focusImage: [
            {
                x: 245,
                y: 350,
                center: true,
                scale: 0.26,
                duration: 1.5,
                focusTime: [
                    { startTime: 4, focusImageUrl: 'image_index_0' },
                    { startTime: 8, focusImageUrl: 'image_index_1' },
                    { startTime: 12, focusImageUrl: 'image_index_2' }
                ]
            }
        ],
        listenButton: { soundUrl: 'sound_index_0', x: 630, y: 405 },
        endButton: { x: 705, y: 405 },
        createElement: { image: [{ x: 80, y: 80, scale: 0.8, imgUrl: 'image_index_3', center: false }] }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000049';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000050

    낱자 형태 알기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000050',
        directive: { text: 'text_index_0' },
        hintCount: 1,        
        hintOffset: [{ index: 0, start: { x: 0, y: 20 }, end: { x: 0, y: 0 } }],
        dragAndDrop: {
            drag: {
                common: { textShadow: true, centerX: true },
                items: [{ x: 155, y: 260, image: { imgUrl: 'image_index_0', scale: 0.8 }, soundUrl: 'sound_index_0', answerIndex: 0 }]
            },
            drop: {
                common: { centerX: true, circle: { radius: 40, offset: { x: 0, y: 0 }, class: 'f02' } },
                items: [{ x: 542, y: 337, scale: 0.75, circle: { class: 'f02', attribute: { opacity: 0 } } }]
            }
        },
        createElement: {
            image: [{ x: 550, y: 270, scale: 0.75, imgUrl: 'image_index_1', rx: 10, ry: 10 }],
            shape: [{ type: 'rect', x: 80, y: 80, width: 150, height: 380, center: false, shapeClass: 'f02' }]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000050';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000051

    낱자의 형태 알기

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000051',
        directive: { text: 'text_index_0' },
        hintCount: 2,
        hintOffset: { x: 0, y: 0 },
        choice: {
            common: { fontSize: 30, soundUrl: 'sound_index_0', textClass: { default: 'f01', correct: 'f14', incorrect: 'f009' } },
            items: [
                { correct: { x: 250, y: 270, text: 'C', moveOffset: { x: -10, y: -50 } }, incorrect: { x: 290, y: 230, text: 'B' } },
                { correct: { x: 290, y: 335, text: 'C', moveOffset: { x: -50, y: -20 } }, incorrect: { x: 235, y: 360, text: 'B' } },
                { correct: { x: 340, y: 390, text: 'C', moveOffset: { x: 0, y: -30 } }, incorrect: { x: 380, y: 350, text: 'B' } }
            ]
        },
        moveElement: {
            start: { x: 140, y: 200, image: { imgUrl: 'image_index_0', scale: 0.8, center: true }, lastHoldDuration: 1 },
            end: { x: 420, y: 430, image: { imgUrl: 'image_index_1', scale: 0.2, center: true }, moveOffset: { x: -30, y: 0 } },
            duration: 0.75
        },
        createElement: { image: [{ x: 400, y: 290, imgUrl: 'image_index_2', scale: 1 }] }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000051';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />


> ## EM000053

    A등급 - P3_V1_F4_M6 (ColI_L, EM_53)

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000053',
        directive: {
            text: 'text_index_0'
        },
        hintCount: 1,
        hintOffset: [
            {
                list: {
                    x: 0,
                    y: 0
                },
                color: {
                    x: 0,
                    y: 0
                }
            }
        ],
        color: {
            image: {
                x: 80,
                y: 80,
                center: false,
                imgUrl: 'image_index_2',
                scale: 0.5
            },
            choiceCommon: {
                textClass: 'f01 bold',
                textOffset: {
                    x: -70,
                    y: 0
                },
                fontSize: 40,
                imgScale: 0.1
            },
            choice: [
                {
                    x: 700,
                    y: 100,
                    colorClass: 'f005',
                    text: 'A',
                    imgUrl: {
                        default: 'image_index_0',
                        choice: 'image_index_1'
                    }
                },
                {
                    x: 700,
                    y: 200,
                    colorClass: 'f006',
                    text: 'B',
                    imgUrl: {
                        default: 'image_index_0',
                        choice: 'image_index_1'
                    }
                },
                {
                    x: 700,
                    y: 300,
                    colorClass: 'f007',
                    text: 'C',
                    imgUrl: {
                        default: 'image_index_0',
                        choice: 'image_index_1'
                    }
                }
            ],
            targetCommon: {
                fontSize: 35
            },
            target: [
                {
                    index: 0,
                    colorClass: 'f005',
                    text: 'A',
                    textClass: 'f01',
                    textOffset: {
                        x: 0,
                        y: 0
                    }
                },
                {
                    index: 1,
                    colorClass: 'f006',
                    text: 'B',
                    textClass: 'f01',
                    textOffset: {
                        x: 0,
                        y: 0
                    }
                },
                {
                    index: 2,
                    colorClass: 'f006',
                    text: 'B',
                    textClass: 'f01',
                    textOffset: {
                        x: -20,
                        y: 0
                    }
                },
                {
                    index: 3,
                    colorClass: 'f007',
                    text: 'C',
                    textClass: 'f01',
                    textOffset: {
                        x: 0,
                        y: 0
                    }
                },
                {
                    index: 4,
                    colorClass: 'f007',
                    text: 'C',
                    textClass: 'f01',
                    textOffset: {
                        x: 20,
                        y: 60
                    }
                },
                {
                    index: 5,
                    colorClass: 'f007',
                    text: 'C',
                    textClass: 'f01',
                    textOffset: {
                        x: 17,
                        y: 35
                    }
                },
                {
                    index: 6,
                    colorClass: 'f006',
                    text: 'B',
                    textClass: 'f01',
                    textOffset: {
                        x: 50,
                        y: 45
                    }
                },
                {
                    index: 7,
                    colorClass: 'f005',
                    text: 'A',
                    textClass: 'f01',
                    textOffset: {
                        x: 0,
                        y: 30
                    }
                },
                {
                    index: 8,
                    colorClass: 'f006',
                    text: 'B',
                    textClass: 'f01',
                    textOffset: {
                        x: -40,
                        y: 30
                    }
                },
                {
                    index: 9,
                    colorClass: 'f005',
                    text: 'A',
                    textClass: 'f01',
                    textOffset: {
                        x: 45,
                        y: 0
                    }
                }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000053';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />


> ## EM000054

    A종합 - P37_V1_F4_M5 (CI_L, EM_54)

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000054',
        directive: {
            text: 'text_index_0'
        },
        hintCount: 1,
        choice: {
            okButtonActiveMinValue: 2,
            okButtonAnsSound: {
                soundUrl: 'sound_index_0',
                feedbackWaitTime: 3
            },
            common: {
                shadow: true,
                circle: {
                    radius: 30,
                    addClass: {
                        default: 'f02 s02',
                        choice: 'f010 s010',
                        nonActive: 'f009 s009'
                    },
                    attributes: {}
                },
                fontSize: 50,
                textCenterX: true,
                textClass: 'f01',
                textOffset: {
                    x: 0,
                    y: 0
                }
            },
            items: [
                {
                    x: 365,
                    y: 150,
                    textOffset: {
                        x: 0,
                        y: -5
                    },
                    text: 'A',
                    answer: true
                },
                {
                    x: 440,
                    y: 185,
                    textOffset: {
                        x: 0,
                        y: -3
                    },
                    text: 'B'
                },
                {
                    x: 320,
                    y: 240,
                    textOffset: {
                        x: 0,
                        y: -3
                    },
                    text: 'C'
                },
                {
                    x: 400,
                    y: 270,
                    textOffset: {
                        x: 0,
                        y: -5
                    },
                    text: 'A',
                    answer: true
                }
            ]
        },
        createElement: {
            image: [
                {
                    order: 0,
                    x: 400,
                    y: 280,
                    scale: 0.9,
                    imgUrl: 'image_index_0'
                }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000054';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000055

    A종합 - P38_V1_F1_M1 (CAI, EM_55)

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000055',
        directive: {
            text: 'text_index_0'
        },
        focusText: {
            common: {
                fontSize: 45,
                duration: 0.5,
                baseTextClass: 'bold hidden',
                blink: {
                    interval: 0.5,
                    duration: 0.5,
                    count: 1
                }
            },
            items: [
                {
                    x: 255,
                    y: 185,
                    text: 'A',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 1.4
                        },
                        {
                            class: 'f018',
                            startTime: 36.1,
                            blink: true
                        }
                    ]
                },
                {
                    x: 315,
                    y: 172,
                    text: 'B',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 1.7
                        },
                        {
                            class: 'f018',
                            startTime: 36.6,
                            blink: true
                        }
                    ]
                },
                {
                    x: 355,
                    y: 165,
                    text: 'C',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 2.3
                        },
                        {
                            class: 'f018',
                            startTime: 37,
                            blink: true
                        }
                    ]
                },
                {
                    x: 400,
                    y: 180,
                    text: 'D',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 2.7
                        },
                        {
                            class: 'f018',
                            startTime: 37.5,
                            blink: true
                        }
                    ]
                },
                {
                    x: 237,
                    y: 235,
                    text: 'E',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 3.1
                        },
                        {
                            class: 'f018',
                            startTime: 37.9,
                            blink: true
                        }
                    ]
                },
                {
                    x: 295,
                    y: 215,
                    text: 'F',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 3.6
                        },
                        {
                            class: 'f018',
                            startTime: 38.4,
                            blink: true
                        }
                    ]
                },
                {
                    x: 347,
                    y: 205,
                    text: 'G',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 4.1
                        },
                        {
                            class: 'f018',
                            startTime: 38.9,
                            blink: true
                        }
                    ]
                },
                {
                    x: 400,
                    y: 220,
                    text: 'H',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 5
                        },
                        {
                            class: 'f018',
                            startTime: 39.7,
                            blink: true
                        }
                    ]
                },
                {
                    x: 452,
                    y: 226,
                    text: 'I',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 5.5
                        },
                        {
                            class: 'f018',
                            startTime: 40.2,
                            blink: true
                        }
                    ]
                },
                {
                    x: 270,
                    y: 270,
                    text: 'J',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 6
                        },
                        {
                            class: 'f018',
                            startTime: 40.6,
                            blink: true
                        }
                    ]
                },
                {
                    x: 318,
                    y: 257,
                    text: 'K',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 6.4
                        },
                        {
                            class: 'f018',
                            startTime: 41,
                            blink: true
                        }
                    ]
                },
                {
                    x: 370,
                    y: 255,
                    text: 'L',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 6.8
                        },
                        {
                            class: 'f018',
                            startTime: 41.5,
                            blink: true
                        }
                    ]
                },
                {
                    x: 410,
                    y: 275,
                    text: 'M',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 7.1
                        },
                        {
                            class: 'f018',
                            startTime: 41.7,
                            blink: true
                        }
                    ]
                },
                {
                    x: 275,
                    y: 317,
                    text: 'N',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 7.3
                        },
                        {
                            class: 'f018',
                            startTime: 41.9,
                            blink: true
                        }
                    ]
                },
                {
                    x: 323,
                    y: 310,
                    text: 'O',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 7.4
                        },
                        {
                            class: 'f018',
                            startTime: 42.1,
                            blink: true
                        }
                    ]
                },
                {
                    x: 370,
                    y: 305,
                    text: 'P',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 7.6
                        },
                        {
                            class: 'f018',
                            startTime: 42.4,
                            blink: true
                        }
                    ]
                },
                {
                    x: 415,
                    y: 327,
                    text: 'Q',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 8.8
                        },
                        {
                            class: 'f018',
                            startTime: 43.3,
                            blink: true
                        }
                    ]
                },
                {
                    x: 305,
                    y: 355,
                    text: 'R',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 9.2
                        },
                        {
                            class: 'f018',
                            startTime: 43.7,
                            blink: true
                        }
                    ]
                },
                {
                    x: 345,
                    y: 360,
                    text: 'S',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 9.7
                        },
                        {
                            class: 'f018',
                            startTime: 44.1,
                            blink: true
                        }
                    ]
                },
                {
                    x: 340,
                    y: 400,
                    text: 'T',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 10.6
                        },
                        {
                            class: 'f018',
                            startTime: 45,
                            blink: true
                        }
                    ]
                },
                {
                    x: 395,
                    y: 390,
                    text: 'U',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 11.1
                        },
                        {
                            class: 'f018',
                            startTime: 45.5,
                            blink: true
                        }
                    ]
                },
                {
                    x: 370,
                    y: 435,
                    text: 'V',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 11.5
                        },
                        {
                            class: 'f018',
                            startTime: 46,
                            blink: true
                        }
                    ]
                },
                {
                    x: 415,
                    y: 435,
                    text: 'W',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 12.4
                        },
                        {
                            class: 'f018',
                            startTime: 46.8,
                            blink: true
                        }
                    ]
                },
                {
                    x: 222,
                    y: 460,
                    text: 'X',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 13.3
                        },
                        {
                            class: 'f018',
                            startTime: 47.7,
                            blink: true
                        }
                    ]
                },
                {
                    x: 273,
                    y: 475,
                    text: 'Y',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 14.2
                        },
                        {
                            class: 'f018',
                            startTime: 48.6,
                            blink: true
                        }
                    ]
                },
                {
                    x: 325,
                    y: 485,
                    text: 'Z',
                    focusTextClass: [
                        {
                            class: 'f02',
                            startTime: 15.2
                        },
                        {
                            class: 'f018',
                            startTime: 49.5,
                            blink: true
                        }
                    ]
                }
            ]
        },
        listenButton: {
            soundUrl: 'sound_index_0',
            x: 630,
            y: 405
        },
        endButton: {
            x: 705,
            y: 405
        },
        createElement: {
            image: [
                {
                    x: 350,
                    y: 270,
                    scale: 0.55,
                    imgUrl: 'image_index_0'
                }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000055';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

> ## EM000056

    A종합 - P39_V2_F2_M3 (CIL_L, EM_56)

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000056',
        directive: {
            text: 'text_index_0'
        },
        hintCount: 1,
        choice: {
            sound: 'sound_index_0',
            common: {
                fontSize: 30,
                textClass: {
                    default: 'f01',
                    choice: 'f26',
                    nonActive: 'f009'
                },
                line: {
                    class: 's010',
                    attributes: {
                        strokeWidth: '2'
                    },
                    duration: 0.35
                },
                dotOffset: {
                    x: 0,
                    y: -40
                }
            },
            fixItem: {
                x: 400,
                y: 150,
                innerImage: {
                    imgUrl: 'image_index_0',
                    scale: 0.3
                },
                text: 'f',
                textClass: 'f01',
                fontSize: 45,
                textCenterX: true,
                textOffset: {
                    x: -5,
                    y: -40
                },
                dotOffset: {
                    x: 0,
                    y: 95
                }
            },
            items: [
                {
                    x: 250,
                    y: 360,
                    innerImage: {
                        default: {
                            imgUrl: 'image_index_1',
                            scale: 0.3
                        }
                    },
                    text: 'g',
                    textCenterX: true
                },
                {
                    x: 400,
                    y: 360,
                    innerImage: {
                        default: {
                            imgUrl: 'image_index_1',
                            scale: 0.3
                        }
                    },
                    text: 'h',
                    textCenterX: true
                },
                {
                    x: 550,
                    y: 360,
                    innerImage: {
                        default: {
                            imgUrl: 'image_index_1',
                            scale: 0.3
                        }
                    },
                    text: 'f',
                    textCenterX: true,
                    answer: true
                },
                {
                    x: 250,
                    y: 450,
                    innerImage: {
                        default: {
                            imgUrl: 'image_index_1',
                            scale: 0.3
                        }
                    },
                    text: 'h',
                    textCenterX: true
                },
                {
                    x: 400,
                    y: 450,
                    innerImage: {
                        default: {
                            imgUrl: 'image_index_1',
                            scale: 0.3
                        }
                    },
                    text: 'f',
                    textCenterX: true,
                    answer: true
                },
                {
                    x: 550,
                    y: 450,
                    innerImage: {
                        default: {
                            imgUrl: 'image_index_1',
                            scale: 0.3
                        }
                    },
                    text: 'g',
                    textCenterX: true
                }
            ]
        },
        createElement: {
            image: [
                {
                    x: 400,
                    y: 350,
                    scale: 0.26,
                    imgUrl: 'image_index_2'
                }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000056';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />    

> ## EM000057

    B종합 - P43_V1_F4_M6 (WN_L, EM_57)

-   ### 기본 포맷

    ```javascript
    {
        questionType: 'EM000057',
        directive: {
            text: 'text_index_0'
        },
        hintCount: 1,
        hintOffset: {
            x: 60,
            y: 85
        },
        swipe: {
            duration: 0.3,
            arrowOffset: {
                left: {
                    x: 0,
                    y: 0
                },
                right: {
                    x: 0,
                    y: 0
                }
            }
        },
        cards: {
            flipDuration: 0.5,
            common: {
                textScale: 3,
                textOffset: {
                    x: 0,
                    y: 60
                },
                background: {
                    width: 200,
                    height: 250,
                    class: 'f02',
                    attributes: {}
                },
                helpButtonOffset: {
                    x: -40,
                    y: 65
                },
                undoButtonOffset: {
                    x: 40,
                    y: 65
                },
                trashButtonOffset: {
                    x: 40,
                    y: 65
                }
            },
            items: [
                {
                    x: 80,
                    y: 120,
                    text: 'A',
                    textBackgroundClass: 'f01'
                },
                {
                    x: 300,
                    y: 120,
                    text: 'B',
                    front: {
                        imgUrl: 'image_index_0',
                        imgScale: 0.5,
                        imgOffset: {
                            x: 0,
                            y: 0
                        },
                        textBackgroundClass: 'f018'
                    },
                    back: {
                        writeClass: 'fno s018',
                        writeAreaClass: 'f02'
                    }
                },
                {
                    x: 520,
                    y: 120,
                    text: 'C',
                    textBackgroundClass: 'f01'
                },
                {
                    x: 740,
                    y: 120,
                    text: 'D',
                    front: {
                        imgUrl: 'image_index_0',
                        imgScale: 0.5,
                        imgOffset: {
                            x: 0,
                            y: 0
                        },
                        textBackgroundClass: 'f018'
                    },
                    back: {
                        writeClass: 'fno s018',
                        writeAreaClass: 'f02'
                    }
                },
                {
                    x: 960,
                    y: 120,
                    text: 'E',
                    front: {
                        imgScale: 0.5,
                        imgOffset: {
                            x: 0,
                            y: 0
                        },
                        textBackgroundClass: 'f018'
                    }
                }
            ]
        }
    }
    ```

-   > `[필수]` questionType | _`string`_

    모듈 설정

    ```javascript
    questionType: 'EM000057';
    ```

    <br />

-   > `[필수]` directive | _`object`_ 지시문 설정  
    > 자세한 내용은 공통 속성 참조

    <br />

