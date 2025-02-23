<!--
https://github.com/othneildrew/Best-README-Template 를 기본으로 하여 수정해 사용
-->

<!-- PROJECT LOGO -->
<br />
<div align="center"> <!-- Obsolete attribute 는 일반 HTML 문서에서 해당되는거고, 깃허브의 마크다운에는 style text-align 이 적용되지 않고 align 이 적용된다. -->
  <a href="https://github.com/sbpark88">
    <!-- images 디렉토리의 `logo.png` 파일을 업데이트한다. -->
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
    <img src="https://github.com/sbpark88/sbpark88.github.io/blob/main/assets/images/favicon/greendreamtree.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Market</h3>

  <p align="center">
    마켓
    <!-- docs 가 필요시 주석을 해제하고 사용
    <br />
    <a href="https://github.com/othneildrew/market"><strong>Explore the docs »</strong></a>
    -->
    <br />
    <br />
    <!-- 아래 경로를 [product-deploy-url] 로 교체하고 문서 내 모든 `project-repository`를 수정한다 -->
    <a href="javascript:void(0)">View Demo</a>
    ·
    <a href="https://github.com/sbpark88/market/projects">Project</a>
    ·
    <a href="https://github.com/sbpark88/market/issues">Issue</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
<!-- 사용 방법 설명이 필요한 프로젝트의 경우 해당 라인 주석을 해제하고 아래 USAGE EXAMPLES 섹션을 작성한다
    <li><a href="#usage">Usage</a></li>
-->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]][product-deploy-url]

프로젝트에 대한 상세한 설명을 작성한다. 보기 쉽게 설명과 함께 목록화 해서 작성하는 것을 권장.

특징:
- Lorem ipsum dolor sit amet, consectetur adipisicing elit.
- Consequuntur iure mollitia natus nemo recusandae voluptates. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
<!-- 필요에 따라 적절히 수정해 사용한다 -->

해당 프로젝트에 사용된 기술입니다.

![HTML5][HTML5 Icon]
![SCSS][SCSS Icon]
![TypeScript][TypeScript Icon]
![React][React Icon]
![Tailwind CSS][Tailwind CSS Icon]
![Next.js][Next.js Icon]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
<!-- 필요에 따라 적절히 수정해 사용한다 -->

### Prerequisites

- npm
```shell
npm install --global yarn
```

[Install Docker Desktop on Windows](https://docs.docker.com/desktop/install/windows-install/),
[Install Docker Desktop on Linux](https://docs.docker.com/desktop/install/linux-install/)
를 참고한다.

or

맥 시스템일 경우 [Homebrew](https://brew.sh) 를 사용하면 편리하다.

```shell
brew install yarn
brew install docker docker-compose
brew services start docker
```

### Installation
<!-- git clone 경로를 확인한다 -->

1. Clone the repo
   ```shell
   git clone https://github.com/sbpark88/market.git
   ```
2. Install NPM packages
   ```shell
   yarn install
   ```
3. Install PostgreSQL using the docker container
   ```shell
   docker-compose up -d
   ```
4. Create Database in PostgreSQL
   ```shell
   npx prisma db push
   ```
5. Run the script
   ```shell
   npm run start
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!--
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->


<!-- ROADMAP -->
## Roadmap

- [ ] Atomic Components
- [ ] Next Auth
- [ ] Product page
    - [ ] UI
    - [ ] Kakao Map
- [ ] Home page
    - [ ] UI
    - [ ] Favorite
    - [ ] Categories
    - [ ] Pagination
- [ ] Product detail page
    - [ ] UI
    - [ ] Dynamic routes
- [ ] Chat
    - [ ] UI
    - [ ] Socket
    - [ ] SWR



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License
<!-- 필요에 따라 적절히 수정해 사용한다 -->

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[![Gmail Badge][Gmail Icon]][My Email]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
<!-- 프로젝트에 관련된 레퍼런스 기술이 필요할 경우 사용한다  -->

- [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
- [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
- [MDN - JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- images 디렉토리의 `screenshot.png` 파일을 업데이트한다. 배포된 프로젝트 경로를 추가한다. -->
[product-screenshot]:images/screenshot.png
[product-deploy-url]:about:blank


<!--
Icons
![HTML5][HTML5 Icon]
![CSS3][CSS3 Icon]
![SCSS][SCSS Icon]
![Styled Components][Styled Components Icon]
![MUI][MUI Icon]
![Tailwind CSS][Tailwind CSS Icon]
![Redux][Redux Icon]
![Redux Saga][Redux Saga Icon]
![Recoil][Recoil Icon]
![Zustand][Zustand Icon]
![Next.js][Next.js Icon]
![JavaScript][JavaScript Icon]
![TypeScript][TypeScript Icon]
![RxJS][RxJS Icon]
![Webpack][Webpack Icon]
![Vite][Vite Icon]
![React][React Icon]
![Angular][Angular Icon]
![Vue.js][Vue.js Icon]
![Java][Java Icon]
![Spring][Spring Icon]
![Spring Boot][Spring Boot Icon]
![Swift][Swift Icon]
![SwiftUI][SwiftUI Icon]
![RxSwift][RxSwift Icon]
![.NET][.NET Icon]
![Classic ASP][Classic ASP Icon]
![Node.js][Node.js Icon]
![Python][Python Icon]
![Docker][Docker Icon]
![Azure DevOps][Azure DevOps Icon]
![AWS][AWS Icon]
![AWS EC2][AWS EC2 Icon]
![AWS Lambda][AWS Lambda Icon]
![Netlify][Netlify Icon]
![Vercel][Vercel Icon]
![Firebase][Firebase Icon]
![Raspberry Pi][Raspberry Pi Icon]
![Oracle][Oracle Icon]
![PostgreSQL][PostgreSQL Icon]
![MySQL][MySQL Icon]
![Microsoft SQL Server][Microsoft SQL Server Icon]
![OWASP][OWASP Icon]
![AWS Lambda][AWS Lambda Icon]


[![GitHub Blog][GitBlog Icon]][My Blog]
[![Gmail Badge][Gmail Icon]][My Email]
-->

<!--
https://simpleicons.org/ 에서 검색해서 추가
-->

[HTML5 Icon]:https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white
[CSS3 Icon]:https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white
[SCSS Icon]:https://img.shields.io/badge/Scss-CC6699.svg?&style=for-the-badge&logo=Sass&logoColor=white
[Styled Components Icon]:https://img.shields.io/badge/Styled_Components-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white
[MUI Icon]:https://img.shields.io/badge/MUI-007FFF.svg?&style=for-the-badge&logo=MUI&logoColor=white
[Tailwind CSS Icon]:https://img.shields.io/badge/Tailwind_CSS-06B6D4.svg?&style=for-the-badge&logo=TailwindCSS&logoColor=white
[Redux Icon]:https://img.shields.io/badge/Redux-764ABC.svg?&style=for-the-badge&logo=Redux&logoColor=white
[Redux Saga Icon]:https://img.shields.io/badge/Redux_Saga-999999.svg?&style=for-the-badge&logo=Redux-Saga&logoColor=white
[Recoil Icon]:https://img.shields.io/badge/Recoil-3578E5.svg?&style=for-the-badge&logo=Recoil&logoColor=white
[Zustand Icon]:https://img.shields.io/badge/Zustand-999999.svg?&style=for-the-badge&logo=Zustand&logoColor=white
[Next.js Icon]:https://img.shields.io/badge/Next.js-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white
[JavaScript Icon]:https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white
[TypeScript Icon]:https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white
[RxJS Icon]:https://img.shields.io/badge/RxJS-A22846.svg?&style=for-the-badge&logo=ReactiveX&logoColor=white
[Webpack Icon]:https://img.shields.io/badge/Webpack-8DD6F9.svg?&style=for-the-badge&logo=Webpack&logoColor=white
[Vite Icon]:https://img.shields.io/badge/Vite-646CFF.svg?&style=for-the-badge&logo=Vite&logoColor=white
[Angular Icon]:https://img.shields.io/badge/Angular-DD0031.svg?&style=for-the-badge&logo=Angular&logoColor=white
[React Icon]:https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white
[Vue.js Icon]:https://img.shields.io/badge/Vue.js-4FC08D.svg?&style=for-the-badge&logo=Vue.js&logoColor=white
[Java Icon]:https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=Java&logoColor=white
[Spring Icon]:https://img.shields.io/badge/Spring-6DB33F.svg?&style=for-the-badge&logo=Spring&logoColor=white
[Spring Boot Icon]:https://img.shields.io/badge/Spring_Boot-6DB33F.svg?&style=for-the-badge&logo=SpringBoot&logoColor=white
[Swift Icon]:https://img.shields.io/badge/Swift-F05138.svg?&style=for-the-badge&logo=Swift&logoColor=white
[SwiftUI Icon]:https://img.shields.io/badge/SwiftUI-3178C6.svg?&style=for-the-badge&logo=Swift&logoColor=white
[RxSwift Icon]:https://img.shields.io/badge/RxSwift-A22846.svg?&style=for-the-badge&logo=ReactiveX&logoColor=white
[.NET Icon]:https://img.shields.io/badge/.NET-512BD4.svg?&style=for-the-badge&logo=dotnet&logoColor=white
[Classic ASP Icon]:https://img.shields.io/badge/Classic_ASP-339933.svg?&style=for-the-badge&logo=dotent&logoColor=white
[Node.js Icon]:https://img.shields.io/badge/Node.js-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white
[Python Icon]:https://img.shields.io/badge/Python-3776AB.svg?&style=for-the-badge&logo=Python&logoColor=white
[Docker Icon]:https://img.shields.io/badge/Docker-2496ED.svg?&style=for-the-badge&logo=Docker&logoColor=white
[Azure DevOps Icon]:https://img.shields.io/badge/Azure_DevOps-0078D7.svg?&style=for-the-badge&logo=azuredevops&logoColor=white
[AWS Icon]:https://img.shields.io/badge/Amazon_AWS-232F3E.svg?&style=for-the-badge&logo=amazoneaws&logoColor=white
[AWS EC2 Icon]:https://img.shields.io/badge/AWS_EC2-FF9900.svg?&style=for-the-badge&logo=amazonec2&logoColor=white
[AWS Lambda Icon]:https://img.shields.io/badge/AWS_Lambda-FF9900.svg?&style=for-the-badge&logo=awslambda&logoColor=white
[Netlify Icon]:https://img.shields.io/badge/Netlify-00C7B7.svg?&style=for-the-badge&logo=netlify&logoColor=white
[Vercel Icon]:https://img.shields.io/badge/Vercel-000000.svg?&style=for-the-badge&logo=vercel&logoColor=white
[Firebase Icon]:https://img.shields.io/badge/Firebase-FFCA28.svg?&style=for-the-badge&logo=firebase&logoColor=white
[Raspberry Pi Icon]:https://img.shields.io/badge/Raspberry_Pi-A22846.svg?&style=for-the-badge&logo=RaspberryPi&logoColor=white
[Oracle Icon]:https://img.shields.io/badge/Oracle-F80000.svg?&style=for-the-badge&logo=Oracle&logoColor=white
[PostgreSQL Icon]:https://img.shields.io/badge/PostgreSQL-4169E1.svg?&style=for-the-badge&logo=PostgreSQL&logoColor=white
[MySQL Icon]:https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white
[Microsoft SQL Server Icon]:https://img.shields.io/badge/Microsoft_SQL_Server-4479A1.svg?&style=for-the-badge&logo=MicrosoftSQLServer&logoColor=white
[OWASP Icon]:https://img.shields.io/badge/OWASP-000000.svg?&style=for-the-badge&logo=OWASP&logoColor=white
[AWS Lambda Icon]:https://img.shields.io/badge/Aws_Lambda-FF9900.svg?&style=for-the-badge&logo=amazonaws&logoColor=white


[GitBlog Icon]:http://img.shields.io/badge/GitHub_Blog-181717?style=flat-square&logo=github&logoColor=white
[My Blog]:https://sbpark88.github.io
[Gmail Icon]:https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=Gmail&logoColor=white
[My Email]:mailto:devsbipa@gmail.com
