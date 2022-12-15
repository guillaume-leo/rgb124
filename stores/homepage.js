const halfOpenHeight = 350;

const closed = {
  isOpen: false,
  height: 0,
};

const halfOpen = {
  isOpen: false,
  height: halfOpenHeight,
};

const open = {
  isOpen: true,
  height: 0,
};

export const useHomepageStore = defineStore('homepageStore', {
  state: () => ({
    project: halfOpen,
    short: halfOpen,
    contact: closed,
  }),
  actions: {
    toggleContact() {
      if (this.contact.isOpen && !this.contact.height) {
        // if open
        this.contact = closed;
        return true;
      }
      if (!this.contact.isOpen && !this.contact.height) {
        // if closed
        this.contact = open;
        this.project = closed;
        this.short = closed;
        return true;
      }
    },
    toggleShorts() {
      if (this.short.isOpen && !this.short.height) {
        // if open
        this.short = closed;
        return true;
      }
      if (!this.short.isOpen && !this.short.height) {
        // if closed
        this.short = open;
        this.contact = closed;
        this.project = closed;
        return true;
      }
      if (this.short.height === halfOpenHeight) {
        // if halfOpen
        this.short = open;
        this.contact = closed;
        this.project = closed;
        return true;
      }
    },
    toggleProjects() {
      if (this.project.isOpen && !this.project.height) {
        // if open
        this.project = closed;
        return true;
      }
      if (!this.project.isOpen && !this.project.height) {
        // if closed
        this.project = open;
        this.contact = closed;
        this.short = closed;
        return true;
      }
      if (this.project.height === halfOpenHeight) {
        // if halfOpen
        this.project = open;
        this.contact = closed;
        this.short = closed;
        return true;
      }
    },
    toggleRgbBanner() {
      this.project = closed;
      this.short = closed;
      this.contact = closed;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomepageStore, import.meta.hot));
}
