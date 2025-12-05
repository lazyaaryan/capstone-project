
const darkModeBtn = document.querySelector('.dark-mode-toggle');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}


document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isLiked = btn.classList.contains('liked');
        const countSpan = btn.querySelector('.like-count');
        let count = parseInt(countSpan.textContent);

        if (isLiked) {
            btn.classList.remove('liked');
            count--;
            btn.querySelector('.action-icon').textContent = '♡';
        } else {
            btn.classList.add('liked');
            count++;
            btn.querySelector('.action-icon').textContent = '♥';
        }

        countSpan.textContent = count;
    });
});


document.querySelectorAll('.show-more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tweetText = btn.previousElementSibling;
        const isExpanded = !tweetText.classList.contains('truncated');

        if (isExpanded) {
            tweetText.classList.add('truncated');
            btn.textContent = 'Show more';
        } else {
            tweetText.classList.remove('truncated');
            btn.textContent = 'Show less';
        }
    });
});


document.querySelectorAll('.follow-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isFollowing = btn.classList.contains('following');

        if (isFollowing) {
            btn.classList.remove('following');
            btn.textContent = 'Follow';
        } else {
            btn.classList.add('following');
            btn.textContent = 'Following';
        }
    });
});
