const bulkActionModal = document.querySelector('.bulk-action-modal');
const bulkActionOpenBtn = document.querySelector('.bulk-action-open-button');

bulkActionOpenBtn.addEventListener('click', () => {
    if (bulkActionModal.hasAttribute('open')) bulkActionModal.close();
    else bulkActionModal.open = true;
    bulkActionOpenBtn.classList.toggle('open')
});

bulkActionModal.addEventListener('click', () => bulkActionModal.close());

const legalNoticeModal = document.querySelector('.legal-notice-modal');

document.querySelector('button.issue-legal-notice-action').addEventListener('click', () => {
    legalNoticeModal.showModal();
});

const communicateModal = document.querySelector('.communicate-modal');

document.querySelector('button.communicate-action').addEventListener('click', () => {
    communicateModal.showModal();
});

const filterModal = document.querySelector('.filter-modal');

document.querySelector('button.filter').addEventListener('click', () => {
    filterModal.showModal();
});

document.querySelectorAll('.modal-card').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target.closest('button[type="reset"]')) {
            modal.close();
        }
    })
})