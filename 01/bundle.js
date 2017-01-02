/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var canvas = document.getElementById('scene');
	var context = canvas.getContext('2d');
	
	var locations = [];
	var frame = 0;
	
	var resizeCanvas = function resizeCanvas() {
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;
	};
	
	var drawScene = function drawScene() {
	    context.clearRect(0, 0, canvas.width, canvas.height);
	
	    for (var index = 0; index < locations.length; ++index) {
	        var l = locations[index];
	
	        var x = (l.x + frame) % (canvas.width + 400) - 200;
	        var y = l.y + 100 / l.size * Math.sin(l.offset + frame / 10);
	
	        if (x == l.magic1) {
	            l.sinkFrames = Math.round(Math.random() * l.size);
	        }
	
	        if (l.sinkFrames > 0) {
	            l.y += 1;
	            l.sinkFrames -= 1;
	        }
	
	        if (x == l.magic2) {
	            l.raiseFrames = Math.round(Math.random() * l.size);
	        }
	
	        if (l.raiseFrames > 0) {
	            l.y -= 1;
	            l.raiseFrames -= 1;
	        }
	
	        drawHexScene(context, x, y, l.size, l.opacity);
	    }
	    frame++;
	};
	
	var drawHexScene = function drawHexScene(context, x, y, size, opacity) {
	
	    context.lineWidth = 1;
	    context.strokeStyle = 'rgba(0,0,0,0.4)';
	    context.fillStyle = 'rgba(0,0,255,' + opacity + ')';
	
	    context.beginPath();
	
	    // top
	    context.moveTo(x - size, y - size);
	    context.lineTo(x + size, y - size);
	
	    // left
	    context.moveTo(x - size, y - size);
	    context.lineTo(x - size * 2, y);
	    context.lineTo(x - size, y + size / 3);
	
	    // bottom
	    context.moveTo(x - size, y + size / 3);
	    context.lineTo(x + size, y + size / 3);
	
	    // right
	    context.moveTo(x + size, y - size);
	    context.lineTo(x + size * 2, y);
	    context.lineTo(x + size, y + size / 3);
	    context.stroke();
	    context.fill();
	
	    // middle
	    context.beginPath();
	    context.moveTo(x - size * 2, y);
	    context.lineTo(x + size * 2, y);
	    context.stroke();
	};
	
	var start = function start() {
	
	    resizeCanvas();
	
	    for (var i = 0; i < 60; i++) {
	        locations.push({
	            x: Math.floor(Math.random() * (window.innerWidth + 400)) - 200,
	            y: Math.floor(Math.random() * window.innerHeight),
	            size: Math.floor(Math.random() * 100),
	            offset: Math.floor(Math.random() * 100),
	            magic1: Math.floor(Math.random() * window.innerWidth),
	            magic2: Math.floor(Math.random() * window.innerWidth),
	            sinkFrames: 0,
	            raiseFrames: 0,
	            opacity: Math.random() * 0.5
	        });
	    }
	
	    draw();
	};
	
	var draw = function draw() {
	    setTimeout(draw, 40);
	    requestAnimationFrame(function () {
	        return drawScene();
	    });
	};
	
	window.addEventListener('resize', resizeCanvas, false);
	
	// HACK: Need to find a better 'onload' event where window size is defined.
	setTimeout(function () {
	    start();
	}, 100);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWNkNDIxNDM4ZGYyNDhmYTdlOTciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibG9jYXRpb25zIiwiZnJhbWUiLCJyZXNpemVDYW52YXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImRyYXdTY2VuZSIsImNsZWFyUmVjdCIsImluZGV4IiwibGVuZ3RoIiwibCIsIngiLCJ5Iiwic2l6ZSIsIk1hdGgiLCJzaW4iLCJvZmZzZXQiLCJtYWdpYzEiLCJzaW5rRnJhbWVzIiwicm91bmQiLCJyYW5kb20iLCJtYWdpYzIiLCJyYWlzZUZyYW1lcyIsImRyYXdIZXhTY2VuZSIsIm9wYWNpdHkiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImZpbGwiLCJzdGFydCIsImkiLCJwdXNoIiwiZmxvb3IiLCJkcmF3Iiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLEtBQU1BLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBLEtBQU1DLFVBQVVILE9BQU9JLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7O0FBRUEsS0FBSUMsWUFBWSxF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Tkc7QUFPWGUseUJBQVksQ0FQRDtBQVFYSSwwQkFBYSxDQVJGO0FBU1hFLHNCQUFTVixLQUFLTSxNQUFMLEtBQWdCO0FBVGQsVUFBZjtBQVdIOztBQUVEaUI7QUFDSCxFQW5CRDs7QUFxQkEsS0FBTUEsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDZkMsZ0JBQVdELElBQVgsRUFBaUIsRUFBakI7QUFDQUUsMkJBQXNCO0FBQUEsZ0JBQU1qQyxXQUFOO0FBQUEsTUFBdEI7QUFDSCxFQUhEOztBQUtBSixRQUFPc0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0N4QyxZQUFsQyxFQUFnRCxLQUFoRDs7QUFFQTtBQUNBc0MsWUFBVyxZQUFVO0FBQ2pCTDtBQUNILEVBRkQsRUFFRyxHQUZILEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWNkNDIxNDM4ZGYyNDhmYTdlOTciLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NlbmUnKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGxvY2F0aW9ucyA9IFtdXG52YXIgZnJhbWUgPSAwO1xuXG5jb25zdCByZXNpemVDYW52YXMgPSAoKSA9PiB7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbn1cblxuY29uc3QgZHJhd1NjZW5lID0gKCkgPT4ge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbG9jYXRpb25zLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBjb25zdCBsID0gbG9jYXRpb25zW2luZGV4XTtcblxuICAgICAgICBjb25zdCB4ID0gKGwueCArIGZyYW1lKSAlIChjYW52YXMud2lkdGggKyA0MDApIC0gMjAwO1xuICAgICAgICBjb25zdCB5ID0gbC55ICsgMTAwIC8gbC5zaXplICogTWF0aC5zaW4obC5vZmZzZXQgKyBmcmFtZSAvIDEwKTtcblxuICAgICAgICBpZiAoeCA9PSBsLm1hZ2ljMSkge1xuICAgICAgICAgICAgbC5zaW5rRnJhbWVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbC5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsLnNpbmtGcmFtZXMgPiAwKSB7XG4gICAgICAgICAgICBsLnkgKz0gMTtcbiAgICAgICAgICAgIGwuc2lua0ZyYW1lcyAtPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHggPT0gbC5tYWdpYzIpIHtcbiAgICAgICAgICAgIGwucmFpc2VGcmFtZXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBsLnNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGwucmFpc2VGcmFtZXMgPiAwKSB7XG4gICAgICAgICAgICBsLnkgLT0gMTtcbiAgICAgICAgICAgIGwucmFpc2VGcmFtZXMgLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXdIZXhTY2VuZShjb250ZXh0LCB4LCB5LCBsLnNpemUsIGwub3BhY2l0eSk7XG4gICAgfVxuICAgIGZyYW1lKys7XG59XG5cbmNvbnN0IGRyYXdIZXhTY2VuZSA9IChjb250ZXh0LCB4LCB5LCBzaXplLCBvcGFjaXR5KSA9PiB7XG5cbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNCknO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDI1NSwnICsgb3BhY2l0eSArICcpJztcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICAvLyB0b3BcbiAgICBjb250ZXh0Lm1vdmVUbyh4IC0gc2l6ZSwgeSAtIHNpemUpO1xuICAgIGNvbnRleHQubGluZVRvKHggKyBzaXplLCB5IC0gc2l6ZSk7XG5cbiAgICAvLyBsZWZ0XG4gICAgY29udGV4dC5tb3ZlVG8oeCAtIHNpemUsIHkgLSBzaXplKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4IC0gc2l6ZSAqIDIsIHkpO1xuICAgIGNvbnRleHQubGluZVRvKHggLSBzaXplLCB5ICsgc2l6ZS8zKTtcblxuICAgIC8vIGJvdHRvbVxuICAgIGNvbnRleHQubW92ZVRvKHggLSBzaXplLCB5ICsgc2l6ZS8zKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4ICsgc2l6ZSwgeSArIHNpemUvMyk7XG5cbiAgICAvLyByaWdodFxuICAgIGNvbnRleHQubW92ZVRvKHggKyBzaXplLCB5IC0gc2l6ZSk7XG4gICAgY29udGV4dC5saW5lVG8oeCArIHNpemUgKiAyLCB5KTtcbiAgICBjb250ZXh0LmxpbmVUbyh4ICsgc2l6ZSwgeSArIHNpemUvMyk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgIC8vIG1pZGRsZVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8oeCAtIHNpemUgKiAyLCB5KTtcbiAgICBjb250ZXh0LmxpbmVUbyh4ICsgc2l6ZSAqIDIsIHkpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG59XG5cbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuXG4gICAgcmVzaXplQ2FudmFzKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgICAgbG9jYXRpb25zLnB1c2goe1xuICAgICAgICAgICAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHdpbmRvdy5pbm5lcldpZHRoICsgNDAwKSkgLSAyMDAsXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQpLFxuICAgICAgICAgICAgc2l6ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgICAgICAgIG9mZnNldDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgICAgICAgIG1hZ2ljMTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGgpLFxuICAgICAgICAgICAgbWFnaWMyOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCksXG4gICAgICAgICAgICBzaW5rRnJhbWVzOiAwLFxuICAgICAgICAgICAgcmFpc2VGcmFtZXM6IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiBNYXRoLnJhbmRvbSgpICogMC41XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXcoKTtcbn1cblxuY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KGRyYXcsIDQwKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gZHJhd1NjZW5lKCkpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XG5cbi8vIEhBQ0s6IE5lZWQgdG8gZmluZCBhIGJldHRlciAnb25sb2FkJyBldmVudCB3aGVyZSB3aW5kb3cgc2l6ZSBpcyBkZWZpbmVkLlxuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgIHN0YXJ0KCk7XG59LCAxMDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9