export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state = {
  session: {
    server: {
      apiUrl: '/api',
      version: '4.0.0'
    },
    username: 'admin',
    password: 'admin'
  },
  isWarmUp: true,
  showAlert: false,
  token: '',
  alert: {
    message: null,
    type: null
  },
  job: null,
  jobHref: null,
  patients: [],
  phenotypeFilters: [],
  variants: [],
  geneNetworkScores: {},
  diagnosticsPackageId: INITIAL_STATE.diagnosticsPackageId,
  matrixEntityId: INITIAL_STATE.matrixEntityId
}

export default state
