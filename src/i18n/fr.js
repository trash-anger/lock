// This file was automatically translated.
// Feel free to submit a PR if you find a more accurate translation.

export default {
  error: {
    forgotPassword: {
      too_many_requests:
        'Tu as atteint la limite de tentatives de changement de mot de passe. Patiente avant de recommencer.',
      'lock.fallback':
        'Désolés, un problème est survenu lors de la demande de changement de mot de passe.',
      enterprise_email:
        "Le domaine de ta messagerie fait partie d'un fournisseur d'identité d'entreprise. Pour réinitialiser votre mot de passe, contacte ton administrateur de sécurité."
    },
    login: {
      blocked_user: 'L’utilisateur est bloqué.',
      invalid_user_password: 'Mauvais identifiants.',
      'lock.fallback':
        'Désolés, un problème est survenu lors de la tentative de connexion.',
      'lock.invalid_code': 'Mauvais code.',
      'lock.invalid_email_password': 'Mauvaise adresse de messagerie ou mot de passe.',
      'lock.invalid_username_password': 'Mauvais nom d’utilisateur ou mot de passe.',
      'lock.network':
        'Serveur injoignable. Vérifie ta connexion et réessaye.',
      'lock.popup_closed': 'La fenêtre popup a été fermée. Réessaye.',
      'lock.unauthorized': 'Les permissions n’ont pas été accordées. Réessaye.',
      password_change_required:
        'Tu dois mettre à jour ton mot de passe, soit parce qu’il s’agit de ta première connexion, soit parce que ce dernier a expiré.',
      password_leaked:
        'Cette connexion a été bloquée parce que ton mot de passe a été utilisé sur un autre site web. Je t\'ai envoyé un courriel avec des instructions pour la débloquer.',
      too_many_attempts:
        'Ton compte a été bloqué à la suite de trop nombreuses tentatives de connexion consécutives.',
      'lock.mfa_registration_required':
        "l'authentification multifactorielle est nécessaire, mais ton appareil n'est pas inscrit. Inscris toi avant de passer.",
      'lock.mfa_invalid_code': 'Mauvais code. Réessaye.',
      session_missing:
        "Impossible de terminer ta demande d'authentification. Essaye de nouveau après la fermeture de tous les dialogues ouverts",
      'hrd.not_matching_email':
        "Utilise ta messagerie d'entreprise pour te connecter.",
      too_many_requests:
        'Désolés. Il y a trop de demandes en ce moment. Recharge la page et réessaye. Si cela persiste, réessaye ultérieurement.'
    },
    passwordless: {
      'bad.email': 'L’adresse de messagerie n’est pas valide',
      'bad.phone_number': 'Le numéro de téléphone n’est pas valide',
      'lock.fallback': 'Désolés, un problème est survenu'
    },
    signUp: {
      invalid_password: 'Le mot de passe n’est pas valide.',
      'lock.fallback':
        'Désolés, un problème est survenu lors de la tentative d’inscription.',
      password_dictionary_error: 'Le mot de passe est trop commun.',
      password_no_user_info_error: 'Le mot de passe est basé sur des informations utilisateur.',
      password_strength_error: 'La force du mot de passe est trop faible.',
      user_exists: 'Cet utilisateur existe déjà.',
      username_exists: 'Ce nom d’utilisateur existe déjà.'
    }
  },
  success: {
    logIn: 'Merci de t\'être connecté.',
    forgotPassword:
      'Je viens de t\'envoyer un courriel pour réinitialiser ton mot de passe.',
    magicLink: 'Je t\'ai envoyé un lien pour te connecter<br />à %s.',
    signUp: 'Merci de t\'être inscrit.'
  },
  blankErrorHint: 'Ne peut être vide',
  codeInputPlaceholder: 'ton code',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'ou',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'ou',
  emailInputPlaceholder: 'tonadresse@inasup.com',
  enterpriseLoginIntructions: 'Connecte-toi avec tes identifiants d’entreprise.',
  enterpriseActiveLoginInstructions:
    'Entre les identifiants de connexion de ton entreprise %s.',
  failedLabel: 'A échoué !',
  forgotPasswordAction: 'Mot de passe oublié ?',
  forgotPasswordInstructions:
    'Entre ton adresse de messagerie. Je t\'enverrai un courriel pour réinitialiser ton mot de passe.',
  forgotPasswordSubmitLabel: 'Envoyer le courriel',
  invalidErrorHint: 'Invalide',
  lastLoginInstructions: 'Dernière connexion avec',
  loginAtLabel: 'Connexion à %s',
  loginLabel: 'Connexion',
  loginSubmitLabel: 'Connexion',
  loginWithLabel: 'Se connecter avec %s',
  notYourAccountAction: 'Ceci n’est pas ton compte ?',
  passwordInputPlaceholder: 'Ton mot de passe',
  passwordStrength: {
    containsAtLeast: 'Doit contenir au moins %d des %d types de caractères :',
    identicalChars:
      'Pas plus de %d caractères identiques dans une ligne (par ex., « %s » n’est pas autorisé)',
    nonEmpty: 'Mot de passe non vide requis',
    numbers: 'Chiffres  (i.e. 0-9)',
    lengthAtLeast: 'Au moins %d caractères',
    lowerCase: 'Lettres minuscules (a-z)',
    shouldContain: 'Doit contenir :',
    specialCharacters: 'Caractères spéciaux (par ex. !@#$%^&*)',
    upperCase: 'Lettres majuscules (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Sinon entre ton adresse de messagerie pour te connecter ou créez un compte',
  passwordlessEmailCodeInstructions: 'Un courriel avec le code a été envoyé à %s.',
  passwordlessEmailInstructions:
    'Entre ton adresse de messagerie pour te connecter ou créez un compte',
  passwordlessSMSAlternativeInstructions:
    'Sinon saisisse ton numéro de téléphone pour te connecter ou créez un compte',
  passwordlessSMSCodeInstructions: 'Un SMS avec le code a été envoyé à %s.',
  passwordlessSMSInstructions:
    'Saisisse ton numéro de téléphone pour te connecter ou créez un compte',
  phoneNumberInputPlaceholder: 'ton numéro de téléphone',
  resendCodeAction: 'Tu n’as pas reçu le code ?',
  resendLabel: 'Envoyer une nouvelle fois',
  resendingLabel: 'Nouvel envoi en cours…',
  retryLabel: 'Réessaye',
  sentLabel: 'Envoyé !',
  signUpLabel: 'Inscription',
  signUpSubmitLabel: 'Inscription',
  signUpWithLabel: 'S’inscrire avec %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Authentification unique activée',
  submitLabel: 'Envoyer',
  unrecoverableError: 'Un problème est survenu.<br />Contacte l’assistance technique.',
  usernameFormatErrorHint:
    'Utilisez %d-%d lettres, chiffres et les caractères suivants: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'ton nom d’utilisateur',
  usernameOrEmailInputPlaceholder: 'nom d’utilisateur/adresse de messagerie',
  title: 'Insan',
  welcome: 'Bienvenue %s !',
  windowsAuthInstructions: 'Tu es connecté depuis ton réseau d’entreprise...',
  windowsAuthLabel: 'Authentification Windows',
  forgotPasswordTitle: 'réinitialise ton mot de passe',
  signUpTitle: "S'inscrire",
  mfaInputPlaceholder: 'Code',
  mfaLoginTitle: '2-Step Vérification',
  mfaLoginInstructions:
    'Entre le code de vérification généré par ton application mobile.',
  mfaSubmitLabel: "S'identifier",
  mfaCodeErrorHint: 'Utilisez des numéros %d',
  showPassword: 'Montrer le mot de passe',
  signUpTerms:
    "En t'inscrivant, tu acceptez mes conditions d'utilisation et ma politique de confidentialité."
};
