export default [function() {

	let scrollCb = function() {};
	let canScroll = true;

	function setScrollCb(cb) {
		scrollCb = cb;
	}

	function getScrollCb() {
		return scrollCb;
	}

	function enableScroll() {
		canScroll = true;
	}


	function disableScroll() {
		canScroll = false;
	}

	function getCanScroll() {
		return canScroll;
	}

	return {
		setScrollCb,
		getScrollCb,
		enableScroll,
		disableScroll,
		getCanScroll
	};

}]