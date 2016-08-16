<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html ng-app="myApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">
    <title>Angular Localization</title>

    <link href="/resources/css/bootstrap.min.css" rel="stylesheet"/>
    <!-- Font Awesome CSS -->
    <link href="/resources/css/font-awesome.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="/resources/css/style.css" rel="stylesheet">
</head>
<body>
<jsp:include page="header.jsp"/>

<div ui-view></div>

<jsp:include page="footer.jsp"/>
<script src="/resources/js/jquery.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
<script src="/resources/js/angular.min.js"></script>
<script src="/resources/js/angular-ui-router.min.js"></script>
<script src="/resources/js/angular-cookies.min.js"></script>
<script src="/resources/js/angular-sanitize.min.js"></script>
<script src="/resources/js/angular-translate.min.js"></script>
<script src="/resources/js/angular-animate.js"></script>
<script src="/resources/js/ui-bootstrap-tpls-2.0.0.min.js"></script>

<script src="/resources/js/plugins/oclazyload/dist/ocLazyLoad.min.js"></script>
<script src="/resources/js/plugins/angular-idle/angular-idle.js"></script>
<script src="/resources/js/angular-breadcrumb.js"></script>
<script src="/resources/js/ngStorage.js"></script>
<script src="/resources/js/toastr.min.js"></script>
<script src="/resources/js/loading-bar.min.js"></script>
<script src="/resources/js/angular-sanitize.min.js"></script>
<script src="/resources/js/angular-cookies.min.js"></script>
<script src="/resources/js/angular-localization.js"></script>
<script src="/AngularApp/build/app.min.js"></script>
</body>
</html>