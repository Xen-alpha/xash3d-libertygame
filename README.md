# Xash3D Engine for Libertygame
## 리버티게임 가젯

이 리포지토리는 FWGS 팀이 관리하는 Xash3D 엔진 리포지토리에서 포크되었습니다. 포크 대상이 된 리포지토리는 waf 빌드 시스템을 사용하는 최신 리포지토리가 아니라 CMake를 사용하는 초기 리포지토리입니다.

[원본 리포지토리](https://github.com/FWGS/xash3d)

Orignal project: [Xash3D on ModDB](http://www.moddb.com/engines/xash3d-engine)

Xash3D Engine is a custom Gold Source engine rewritten from scratch. Xash3D
is compatible with many of the Gold Source games and mods and should be
able to run almost any existing singleplayer Half-Life mod without a hitch.
The multiplayer part is not yet completed, multiplayer mods should work just
fine, but bear in mind that some features may not work at all or work not
exactly the way they do in Gold Source Engine.

Xash3D FWGS is a fork of Xash3D Engine, which aims on crossplatform and compatibility
with original Xash3D and Gold Source.

- [Building and running Xash3D FWGS](https://github.com/FWGS/xash3d/wiki/Building-and-running)
- [Installing and setting up the server on Debian/Ubuntu Linux](https://github.com/FWGS/xash3d/wiki/How-to-set-up-a-Xash3D-Dedicated-Server-on-Debian-Ubuntu-Linux)

## License
English:

Xash3D-Libertygame is licensed under GPLv3 license according to the original FWGS team's license policy. see [COPYING](https://github.com/FWGS/xash3d/blob/master/COPYING) for details.

CMakeLists.txt files are licensed under MIT license, you will find it's text
in every CMakeLists.txt header.

The squish library in engine/vtflib/libsquish is distributed under the terms and conditions of the MIT
license. This license is specified at the top of each source file and must be
preserved in its entirety.

VTFLib is Copyright *Neil 'Jed' Jedrzejewski & Ryan Gregg and is released under the terms of LGPL version 2.1. Please see the LICENSE file inside engine/vtflib directory for details. Half-life and Half-life SDK is properties of Valve Corporation.

If there is some license violation inside the source code, Please note the violated point to Xen-alpha so that the guy will fix it.

배포 라이선스 한국어 요약:
리버티게임용 Xash3D는 FWGS 팀이 정한 GPL v3을 따르고, CMakeLists.txt와 engine/vtflib/libsquish 폴더의 소스코드는 MIT 라이선스에 따라 배포되도록 소스 코드 위쪽 주석에 적혀 있으며, Neil 'Jed' Jedrzejewski & Ryan Gregg의 프로젝트인 VTFLib는 LGPL 2.1 버전을 따릅니다.

Half-life와 HLSDK는 밸브 코퍼레이션의 저작물이며, 밸브 코퍼레이션의 소스 코드 배포 정책을 따릅니다.

만일 배포 라이선스 위반 사항을 발견할 경우 Xen-alpha에게 알려주시면 고치겠습니다.
